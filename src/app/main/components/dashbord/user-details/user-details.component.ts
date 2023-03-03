import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from 'src/app/service/userdata.service';

import {
  UntypedFormGroup,
} from '@angular/forms';

export type userDetails = {
  userId?: string;
  designation: string;
  email: string;
  userType: string;
  acessToken: string;
  uid: string;
  picture: any;
};

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  validateForm!: UntypedFormGroup;
  data: any = [];
  userData: any = {};
  arr: any;
  currentUser: any = [];
  loader = false;
  picUrl =
    'https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png';

  constructor(
    private router: Router,
    private auth: UserdataService,
  ) {
    this.userData = localStorage.getItem('logInUser');
    this.loader = true;
    this.userData = JSON.parse(this.userData);
    this.auth.getData().subscribe((res) => {
      this.data = res;
      let rep = this.data.find((u: any) => this.userData.uid === u.uid);
      this.currentUser = rep;
      this.loader = false;
    });
  }

  ngOnInit(): void {}
  registerDetails(data: userDetails) {
    data = {
      ...data,
      uid: this.userData.uid,
      email: this.userData.email,
      acessToken: this.userData.accessToken,
      userType: this.userData.userType,
      picture: this.picUrl,
    };

    this.auth.register(data).subscribe((res) => {

    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
      });
    };
   }


