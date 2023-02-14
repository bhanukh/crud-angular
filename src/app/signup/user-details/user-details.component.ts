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
  constructor(
    private router: Router,
    private auth: UserdataService,
    private af: UntypedFormBuilder,
    private toaster: ToastrService
  ) {
    this.userData = localStorage.getItem('logInUser');

    this.userData = JSON.parse(this.userData);
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
      userType:this.userData.displayName
    };
    console.log(data);

    this.auth.register(data).subscribe((res) => {
      this.router.navigate(['profile']);
    });
  }
}
