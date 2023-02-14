import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './dashbord/profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { UserDetailsComponent } from './dashbord/user-details/user-details.component';
import { UserListComponent } from './dashbord/user-list/user-list.component';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './dashbord/logout/logout.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  { path: 'user', component: UserDetailsComponent },
  { path: 'register', component: SignupComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'list', component: UserListComponent },
  { path: 'logout', component: LogoutComponent },

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
