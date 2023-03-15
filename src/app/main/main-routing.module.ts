import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../service/auth.guard';
import { ChartComponent } from './components/chart/chart.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { LogoutComponent } from './components/dashbord/logout/logout.component';
import { ProfileComponent } from './components/dashbord/profile/profile.component';
import { UserDetailsComponent } from './components/dashbord/user-details/user-details.component';
import { UserListComponent } from './components/dashbord/user-list/user-list.component';
import { PiechartComponent } from './components/piechart/piechart.component';
import { UserTableComponent } from './components/user-table/user-table.component';

const routes: Routes = [
  {path:'', component:DashbordComponent,
children:[
  { path: 'profile', component: ProfileComponent },
  { path: 'list', component: UserListComponent },
  { path: 'logout', component: LogoutComponent },
  {path:'dashbord', component:DashbordComponent},
  { path: 'user', component: UserDetailsComponent },
  {path: 'table', component:UserTableComponent},
  {path: 'chart', component:ChartComponent},
  {path: 'pie', component:PiechartComponent},

],canActivate:[AuthGuard]
}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
