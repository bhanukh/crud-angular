import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserdataService } from 'src/app/service/userdata.service';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  userData: any;
  data: any;
  logInStatus: boolean;
  currentUser: any = [];
  constructor(
    private http: HttpClient,
    private auth: UserdataService,
    private af: AuthService
  ) {
    this.data = localStorage.getItem('logInUser');
    this.userData = JSON.parse(this.data);
    // console.log(this.userData);

    //console.log('uid', JSON.parse(this.data));
    this.logInStatus = this.af.isLoggedIn();

    // this.auth.getData().subscribe((res) => {
    //   this.data = res;
    //   let rep = this.data.find((u: any) => this.userData.uid === u.uid);
    //   console.log('res', rep);
    // });
  }

  ngOnInit() {
    this.auth.getData().subscribe((res) => {
      this.data = res;
      let rep = this.data.find((u: any) => this.userData.uid === u.uid);
      console.warn(rep);
      this.currentUser = rep;
      console.table(this.currentUser.userName);
      localStorage.setItem('userType', this.currentUser.userType);
    });
  }
}
