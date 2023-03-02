import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './main/components/dashbord/profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { UserDetailsComponent } from './main/components/dashbord/user-details/user-details.component';
import { UserListComponent } from './main/components/dashbord/user-list/user-list.component';
import { ErrorComponent } from './shared/components/error/error.component';
import { LogoutComponent } from './main/components/dashbord/logout/logout.component';
import { DashbordComponent } from './main/components/dashbord/dashbord.component';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },

  { path: 'register', component: SignupComponent },
  {path:'main', component:DashbordComponent,
children:[
  { path: 'profile', component: ProfileComponent },
  { path: 'list', component: UserListComponent },
  { path: 'logout', component: LogoutComponent },
  {path:'dashbord', component:DashbordComponent},
  { path: 'user', component: UserDetailsComponent },
],canActivate:[AuthGuard]
}
,
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
