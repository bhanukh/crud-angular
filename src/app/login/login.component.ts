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
  userData: any;
  email: string = '';
  pass: string = '';
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

  log(data: any) {
    if (this.email == '') {
      alert('enter email');
      return;
    }
    if (this.pass == '') {
      alert('enter pass');
      return;
    }
    this.auth
      .login(this.email, this.pass)
      .then((result) => {
        this.userList.getData().subscribe((res) => {
          localStorage.setItem('data', JSON.stringify(res));
          this.userData = localStorage.getItem('logInUser');
          this.userData = this.userData;
          console.warn(result)
        });
        this.router.navigate(['userReg']);
      })
      .catch((error) => {
        this.showError();
        this.router.navigate(['']);
      });
  }
}
