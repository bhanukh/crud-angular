import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  userData: any;
  data: any;
  display: string | undefined;
  constructor(private http: HttpClient) {
    this.data = localStorage.getItem('user');
    //console.log(this.data);
    this.userData = JSON.parse(this.data);
    console.log(this.userData);
  }

  ngOnInit() {
    // this.http.post(
    //   'https://crud-app-2f179-default-rtdb.firebaseio.com/user.json',
    //   {
    //     userName: (String = this.userData[0]),
    //     email: (String = this.userData[3]),
    //     uid: (String = this.userData[2]),
    //     refToken: (String = this.userData[1]),
    //   }
    // );
    // console.log('send');
  }
  registerUser() {}
}
