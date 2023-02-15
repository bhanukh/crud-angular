import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserdataService } from 'src/app/service/userdata.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  [x: string]: any;
  data: any = [];
  user: any = [];
  userData: any;
  usertype: any;
  isEdit: boolean = false;
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
    item.isEdit = true;
  }
  updateUser(data: any, item: any) {
    data = {
      ...data,
      uid: item.uid,
      email: item.email,
      acessToken: item.accessToken,
      userType: item.userType,
      userId: item.userId,
    };
    this.auth.updateInfo(data).subscribe((res) => {
      this.auth.getData().subscribe((res) => {
        this.data = res;
      });
      item.isEdit = false;
      this.showSuccesEdit();
    });
    //
  }

  deleteUser(userId: string) {
    if (confirm('do you want to delete user?')) {
      this.auth.deleteUser(userId).subscribe((res) => {
        console.warn(res);
        this.data = this.data.filter((eachData: any) => {
          eachData.userId !== userId;
          console.log('deleted');
          this.auth.getData().subscribe((resp) => {
            this.user = res;
          });
        });

        this.showSuccess();
      });
    }
  }
}
