import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from 'src/app/service/userdata.service';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
  FormGroup,
} from '@angular/forms';

export type userDetails = {
  userId?: string;
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
export class UserDetailsComponent implements OnInit {
  validateForm!: UntypedFormGroup;
  data: any[] = [];
  userData: any = {};
  arr: any;
  constructor(
    private router: Router,
    private auth: UserdataService,
    private af: UntypedFormBuilder
  ) {
    this.userData = localStorage.getItem('user');

    this.userData = JSON.parse(this.userData);
    console.log(this.userData);
  }
  ngOnInit(): void {
    this.validateForm = this.af.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
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
