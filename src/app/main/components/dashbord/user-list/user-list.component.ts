import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserdataService } from 'src/app/service/userdata.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AuthService } from 'src/app/service/auth.service';
import { Location } from '@angular/common';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  updateUserDet = {
    userName: '',
    designation: '',
    number: '',
  };
  name = '';
  designation: string = '';
  number: number = 0;
  searchValue!: string;
  [x: string]: any;
  data: any = [];
  user: any = [];
  userData: any;
  usertype: any;
  isEdit: boolean = false;
  select: any;

  currentPage = 1;
  pageSize = 8;
  sortKey: string = '';
  reverse: boolean = false;

  sort(key: string) {
    this.reverse = this.sortKey === key ? !this.reverse : false;
    this.sortKey = key;
  }

  constructor(
    private auth: UserdataService,
    private modal: NzModalService,
    private toaster: ToastrService,
    private notification:NzNotificationService
  ) {
    this.auth.getData().subscribe((resData) => {
      this.user = Object.values(resData);

      this.userData = localStorage.getItem('logInUser');
      this.userData = JSON.parse(this.userData);
      console.log(this.userData.userType);
      this.usertype = this.userData.userType;

      let rep = this.user.filter((u: any) => this.userData.uid !== u.uid);
      this.user = rep;
    });
  }

  ngOnInit(): void {}
  showSuccess() {
    this.toaster.success('Selected user deleted successfully', 'Success');
  }
  showSuccesEdit() {
    this.notification.success(
      'Success',
      'User details updated successfuly.',
      { nzDuration: 0 }
    );
  }
  showModal(item: any) {
    this.isEdit = true;
    this.updateUserDet.userName = item.userName;
    this.updateUserDet.designation = item.designation;
    this.updateUserDet.number = item.number;
    console.log('user', item);
    localStorage.setItem('selected', JSON.stringify(item));
    this.select = localStorage.getItem('selected');
    this.select = JSON.parse(this.select);
    this.name = this.select.userName;
    this.designation = this.select.designation;
    this.number = this.select.number;
  }
  handleOk(): void {
    console.log('Button ok clicked!');

    this.isEdit = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isEdit = false;
  }

  getUserList() {
    this.auth.allData().subscribe((resp) => {
      this.user = Object.values(resp);
      let rep = this.user.filter((u: any) => this.userData.uid !== u.uid);
      this.user = rep;
      console.log(this.user);
    });
  }

  updateAdmin(data: any) {
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
        let rep = this.user.filter((u: any) => this.userData.uid !== u.uid);
        this.user = rep;
      });
      this.isEdit = false;
      this.showSuccesEdit();
    });
  }

  deleteUser(userId: string) {
    console.log(userId);
    this.modal.confirm({

      nzTitle: 'Are you sure delete this user?',
      nzContent: '<b style="color: red;">Some descriptions</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => {
        this.auth.deleteUser(userId).subscribe((res) => {
          console.log(res);

          // this.data = this.data.filter((eachData: any) => {
          //   eachData.userId !== userId;
          // });
          this.auth.getData().subscribe((resp) => {
            this.user = Object.values(resp);
            let rep = this.user.filter((u: any) => this.userData.uid !== u.uid);
            this.user = rep;
            console.log(this.user);
            this.showSuccess();
          });
        });
      },

      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel'),
    });

  }
}
