import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from 'src/app/service/userdata.service';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
  FormGroup,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

export type userDetails = {
  userId?: string;
  name: string;
  designation: string;
  email: string;
  phone: string;
  pass: string;
  userType: string;
  acessToken: string;
  uid: string;
};

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  validateForm!: UntypedFormGroup;
  data: any[] = [];
  userData: any = {};
  arr: any;
  currentUser: any = [];
  loader = false;
  count = [];
  num: any;
  constructor(
    private router: Router,
    private auth: UserdataService,
    private af: UntypedFormBuilder,
    private toaster: ToastrService
  ) {
    this.auth.allData().subscribe((res) => {
      this.count = res;
      this.num = this.count.length;
      console.log(this.count);
    });
    this.userData = localStorage.getItem('logInUser');
    this.loader = true;
    this.userData = JSON.parse(this.userData);
    this.auth.getData().subscribe((res) => {
      this.data = res;

      console.log(this.count);
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
    };

    this.auth.register(data).subscribe((res) => {
      this.router.navigate(['/profile']);
    });
  }
}
