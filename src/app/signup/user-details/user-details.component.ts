import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from 'src/app/service/userdata.service';

export type userDetails = {
  name: string;
  designation: string;
  email: string;
  phone: string;
  pass: string;
  type: string;
  acessToken: string;
  uid: string;
};

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent {
  data: any[] = [];
  userData: any = {};
  constructor(private router: Router, private auth: UserdataService) {
    this.userData = localStorage.getItem('user');

    this.userData = JSON.parse(this.userData);
    console.log(this.userData);
  }

  registerDetails(data: userDetails) {
    data = {
      ...data,
      uid: this.userData.uid,
      email: this.userData.email,
      acessToken: this.userData.accessToken,
    };

    this.auth.register(data).subscribe((res) => {
      this.router.navigate(['login']);
    });
  }
}
