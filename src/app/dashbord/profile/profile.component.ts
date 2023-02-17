import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserdataService } from 'src/app/service/userdata.service';
import { AuthService } from 'src/app/service/auth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  isEdit = false;

  userData: any;
  data: any;
  logInStatus: boolean;
  currentUser: any = [];
  loader = false;

  constructor(
    private http: HttpClient,
    private auth: UserdataService,
    private af: AuthService,
    private toaster: ToastrService
  ) {
    this.data = localStorage.getItem('logInUser');
    this.userData = JSON.parse(this.data);

    this.logInStatus = this.af.isLoggedIn();
    this.updateAdmin.bind(this);
  }
  updateInfo = {
    userName: '',
    designation: '',
    number: '',
  };

  ngOnInit() {
    this.loader = true;
    this.auth.getData().subscribe((res) => {
      this.data = res;
      let rep = this.data.find((u: any) => this.userData.uid === u.uid);

      this.currentUser = rep;
      localStorage.setItem('userType', this.currentUser.userType);
      this.loader = false;
    });
  }

  showModal(currentUser: any) {
    this.isEdit = true;
    this.updateInfo.userName = this.currentUser.userName;
    this.updateInfo.designation = this.currentUser.designation;
    this.updateInfo.number = this.currentUser.number;
  }
  handleOk(): void {
    console.log('Button ok clicked!');

    this.isEdit = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isEdit = false;
  }

  showSuccess() {
    this.toaster.success('Information updated successfully', 'Success');
  }

  updateAdmin(data: any) {
    console.log(this.currentUser.userId);
    data = {
      ...data,
      uid: this.currentUser.uid,
      email: this.currentUser.email,
      acessToken: this.currentUser.accessToken,
      userType: this.currentUser.userType,
      userId: this.currentUser.userId,
    };
    console.log(data);
    this.auth.updateInfo(data).subscribe((res) => {
      this.auth.getData().subscribe((res) => {
        console.log(res);
        this.data = res;
        let rep = this.data.find((u: any) => this.userData.uid === u.uid);
        this.currentUser = rep;
        console.log(rep);
        this.isEdit = false;
      });
      this.showSuccess();
    });
  }
}
