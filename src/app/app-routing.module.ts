import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './dashbord/profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { UserDetailsComponent } from './signup/user-details/user-details.component';
import { UserListComponent } from './dashbord/user-list/user-list.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  { path: 'userReg', component: UserDetailsComponent },
  { path: 'register', component: SignupComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/list', component: UserListComponent },

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
