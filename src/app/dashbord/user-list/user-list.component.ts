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
  userData: any;
  constructor(private auth: UserdataService, private router: Router) {
    this.auth.getData().subscribe((resData) => {
      this.data = Object.values(resData);
      //console.warn(this.data);
      this.userData = localStorage.getItem('logInUser');
      // console.warn(this.userData.userId);
      console.table(this.data);
    });
  }

  editUser(item: any) {
    item.isEdit = true;
    // this.userData.forEach((element: { isEdit: boolean }) => {
    //   element.isEdit = false;
    // });
    this.auth.getSelectedInfo(item.userId).subscribe((res) => {
      console.log(res);
    });
  }
  updateUser(data: any, item: any) {
    data = {
      ...data,
      uid: item.uid,
      email: item.email,
      acessToken: item.accessToken,
      userType: item.userType,
    };
    console.warn(item.uid);

    this.auth.updateInfo(data).subscribe((res) => {
      console.log(res);
      location.reload();
    });
  }

  deleteUser(userId: string) {
    if (confirm('do you want to delete user?')) {
      this.auth.deleteUser(userId).subscribe((res) => {
        this.data = this.data.filter((eachData: any) => {
          eachData.userId !== userId;
          this.auth.getData();
        });

        console.log('User deleted successfully!');
        location.reload();
      });
    }
  }
}
