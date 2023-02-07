import { Component } from '@angular/core';
import { UserdataService } from 'src/app/service/userdata.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  data: any = [];
  userInfo: any = [];
  constructor(private auth: UserdataService) {
    this.auth.getData().subscribe((res) => {
      this.data = Object.values(res);
      console.log(this.data[0].uid);
    });
  }

  deleteUser(uid: string) {
    if (confirm('do you want to delete user?')) {
      this.auth.deleteUser(uid).subscribe((res) => {
        this.data = this.data.filter((uid: string) => {
          this.data.uid !== uid;
        });
        // this.auth.getData().subscribe((res) => console.log(res));
        console.log('User deleted successfully!');
      });
    }
  }
}
