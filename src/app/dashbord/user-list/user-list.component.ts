import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from 'src/app/service/userdata.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  [x: string]: any;
  data: any;
  user: any;
  userData: any;
  usertype: any;
  isEdit: boolean = false;
  constructor(private auth: UserdataService, private router: Router) {
    this.auth.getData().subscribe((resData) => {
      this.user = Object.values(resData);
      this.userData = localStorage.getItem('logInUser');
       this.userData=(JSON.parse(this.userData));
      //  console.warn(this.userData.uid)
      this.usertype = localStorage.getItem('userType');
      // console.log('type', this.usertype);

      let rep = this.user.filter((u: any) =>this.userData.uid  !== u.uid );
       console.log(rep);
       this.user=rep;
    });
  }

  editUser(item: any) {
    item.isEdit = true;
    // this.userData.forEach((element: { isEdit: boolean }) => {
    //   element.isEdit = false;
    // });

    // this.auth.getSelectedInfo(item.userId).subscribe((res) => {
    //   console.log(res);
    //});
    // let rep = this.data.find((u: any) => item.userId === u.userId);
    // console.log(rep);
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
    console.warn(item.uid);
    this.auth.updateInfo(data).subscribe((res) => {
      console.log('update', res);

      this.auth.getData().subscribe((res) => {
        this.data = res;
      });
      item.isEdit = false;
    });
    //
  }

  deleteUser(userId: string) {
    if (confirm('do you want to delete user?')) {
      this.auth.deleteUser(userId).subscribe((res) => {
        this.data = this.data.filter((eachData: any) => {
          eachData.userId !== userId;
          this.auth.getData().subscribe((res) => {
            this.user = res;
          });
        });
        console.log('User deleted successfully!');
      });
    }
  }
}
