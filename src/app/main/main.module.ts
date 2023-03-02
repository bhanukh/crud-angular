import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { LogoutComponent } from './components/dashbord/logout/logout.component';
import { NavbarComponent } from './components/dashbord/navbar/navbar.component';
import { ProfileComponent } from './components/dashbord/profile/profile.component';
import { UserDetailsComponent } from './components/dashbord/user-details/user-details.component';
import { UserInfoModalComponent } from './components/dashbord/user-info-modal/user-info-modal.component';
import { UserListComponent } from './components/dashbord/user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';
import { LoadingSpinerComponent } from '../shared/components/loading-spiner/loading-spiner.component';


@NgModule({
  declarations: [
    LogoutComponent,
    UserDetailsComponent,
    NavbarComponent,
    UserListComponent,
    LoadingSpinerComponent,
    DashbordComponent,
    UserInfoModalComponent,
    ProfileComponent,

  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
  ],
  exports:[
    CommonModule,
    MainRoutingModule,
    SharedModule,
  ]
})
export class MainModule { }
