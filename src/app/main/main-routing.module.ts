import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { LogoutComponent } from './components/dashbord/logout/logout.component';
import { ProfileComponent } from './components/dashbord/profile/profile.component';
import { UserDetailsComponent } from './components/dashbord/user-details/user-details.component';
import { UserListComponent } from './components/dashbord/user-list/user-list.component';

const routes: Routes = [
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
