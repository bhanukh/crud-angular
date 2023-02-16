import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserdataService } from '../service/userdata.service';
import { user } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  model = {
    email: null,
  };
  loginSubmit = {
    email: '',
    pass: '',
  };
  userData: any;

  constructor(
    private auth: AuthService,
    private http: HttpClient,
    private router: Router,
    private userList: UserdataService,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {}
  showError() {
    this.toaster.error('email password wrong', 'Error');
  }
  showErrorEmail() {
    this.toaster.warning('Please enter email password.', 'Warning!');
  }

  log(data: any) {
    if (this.loginSubmit.email == '' && this.loginSubmit.pass == '') {
      this.showErrorEmail();
      return;
    }

    this.auth
      .login(this.loginSubmit.email, this.loginSubmit.pass)
      .then((result) => {
        this.userList.getData().subscribe((res) => {
          localStorage.setItem('data', JSON.stringify(res));
          this.userData = localStorage.getItem('logInUser');
          this.userData = JSON.parse(this.userData);
        });
        this.router.navigate(['dashbord']);
      })
      .catch((error) => {
        this.showError();
        this.router.navigate(['']);
      });
  }
}
