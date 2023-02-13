import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserdataService } from 'src/app/service/userdata.service';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { AuthService } from 'src/app/service/auth.service';
import { ToastrService } from 'ngx-toastr';
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
    private af: AuthService,
    private toaster: ToastrService
  ) {
    this.data = localStorage.getItem('logInUser');
    this.userData = JSON.parse(this.data);

    this.logInStatus = this.af.isLoggedIn();
  }

  ngOnInit() {
    this.auth.getData().subscribe((res) => {
      this.data = res;
      let rep = this.data.find((u: any) => this.userData.uid === u.uid);

      this.currentUser = rep;
      console.table(this.currentUser.userName);
      localStorage.setItem('userType', this.currentUser.userType);
    });
  }
  showSuccess() {
    this.toaster.success('Information updated successfully', 'Success');
  }
  editAdmin(currentUser: any) {
    currentUser.isEdit = true;
  }
  updateAdmin(data: any, item: any) {
    data = {
      ...data,
      uid: item.uid,
      email: item.email,
      acessToken: item.accessToken,
      userType: item.userType,
      userId: item.userId,
    };
    // console.warn(item.uid);
    this.auth.updateInfo(data).subscribe((res) => {
      // console.log('update', res);

      this.auth.getData().subscribe((res) => {
        this.data = res;
      });
      item.isEdit = false;
      this.showSuccess();
    });
  }
}
