import { Component } from '@angular/core';
import { UserdataService } from 'src/app/service/userdata.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  data: any = [];
  userData: any;
  constructor(private auth: UserdataService) {
    this.auth.getData().subscribe((resData) => {
      this.data = Object.values(resData);
      //console.warn(this.data);
      this.userData = localStorage.getItem('data');
      // console.warn(this.userData.userId);
    });
  }

  deleteUser(userId: string) {
    if (confirm('do you want to delete user?')) {
      this.auth.deleteUser(userId).subscribe((res) => {
        this.data = this.data.filter((eachData: any) => {
          eachData.userId !== userId;
          // this.auth.getData();
        });

        console.log('User deleted successfully!');
      });
    }
  }
}
