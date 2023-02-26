import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserdataService } from 'src/app/service/userdata.service';
<<<<<<< HEAD
import { getAuth, deleteUser } from 'firebase/auth';

// const auth = getAuth();
=======
import { NzModalService } from 'ng-zorro-antd/modal';
>>>>>>> de36e88d150a6618389dad6bfd8e8caf6f861c60

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

  [x: string]: any;
  data: any = [];
  user: any = [];
  userData: any;
  usertype: any;
  isEdit: boolean = false;
  select: any;
  constructor(
    private auth: UserdataService,
    private modal: NzModalService,
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

  ngOnInit(): void {}
  showSuccess() {
    this.toaster.success('Selected user deleted successfully', 'Success');
  }
  showSuccesEdit() {
    this.toaster.success('User information updated successfully', 'Success');
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
      });
      this.isEdit = false;
      this.showSuccesEdit();
    });
  }

<<<<<<< HEAD
  deleteUserDet(userId: string,uid:any) {
    this.auth.deleteUser(userId).subscribe((res) => {
      this.data = this.data.filter((eachData: any) => {
        eachData.userId !== userId;
      });
      this.auth.allData().subscribe((resp) => {
        this.user = Object.values(resp);
        let rep = this.user.filter((u: any) => this.userData.uid !== u.uid);
        this.user = rep;
        deleteUser(uid).then((res)=>{
                     console.log(res)
        });
      });
      this.showSuccess();
=======
  deleteUser(userId: string) {
    this.modal.confirm({
      nzTitle: 'Are you sure delete this user?',
      nzContent: '<b style="color: red;">Some descriptions</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => {
        this.auth.deleteUser(userId).subscribe((res) => {
          this.data = this.data.filter((eachData: any) => {
            eachData.userId !== userId;
          });
          this.auth.allData().subscribe((resp) => {
            this.user = Object.values(resp);
            let rep = this.user.filter((u: any) => this.userData.uid !== u.uid);
            this.user = rep;
          });
          this.showSuccess();
        });
      },
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel'),
>>>>>>> de36e88d150a6618389dad6bfd8e8caf6f861c60
    });
  }
}
