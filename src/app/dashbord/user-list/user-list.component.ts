import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserdataService } from 'src/app/service/userdata.service';
import { getAuth, deleteUser } from 'firebase/auth';

const auth = getAuth();

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  updateUserDet = {
    userName: '',
    designation: '',
    number: '',
  };

  [x: string]: any;
  data: any = [];
  user: any = [];
  userData: any;
  usertype: any;
  isEdit: boolean = false;
  select: any;
  constructor(
    private auth: UserdataService,

    private router: Router,
    private toaster: ToastrService
  ) {
    this.auth.getData().subscribe((resData) => {
      this.user = Object.values(resData);

      this.userData = localStorage.getItem('logInUser');
      this.userData = JSON.parse(this.userData);
      this.usertype = localStorage.getItem('userType');

      let rep = this.user.filter((u: any) => this.userData.uid !== u.uid);
      this.user = rep;
    });
  }
  showSuccess() {
    this.toaster.success('Selected user deleted successfully', 'Success');
  }
  showSuccesEdit() {
    this.toaster.success('User information updated successfully', 'Success');
  }
  editUser(item: any) {
    this.isEdit = true;

    this.updateUserDet.userName = item.userName;
    this.updateUserDet.designation = item.designation;
    this.updateUserDet.number = item.number;
    console.log('user', item);
    localStorage.setItem('selected', JSON.stringify(item));
  }
  updateUser(data: any, item: any) {
    this.select = localStorage.getItem('selected');

    this.select = JSON.parse(this.select);

    data = {
      ...data,
      uid: this.select.uid,
      email: this.select.email,
      acessToken: this.select.accessToken,
      userType: this.select.userType,
      userId: this.select.userId,
    };

    this.auth.updateInfo(data).subscribe((res) => {
      this.auth.getData().subscribe((res) => {
        this.user = res;
      });
      this.isEdit = false;
      this.showSuccesEdit();
    });
  }

  deleteUser(userId: string) {
    this.auth.deleteUser(userId).subscribe((res) => {
      this.data = this.data.filter((eachData: any) => {
        eachData.userId !== userId;
      });
      this.auth.allData().subscribe((resp) => {
        this.user = Object.values(resp);
        let rep = this.user.filter((u: any) => this.userData.uid !== u.uid);
        this.user = rep;
        deleteUser();
      });
      this.showSuccess();
    });
  }
}
