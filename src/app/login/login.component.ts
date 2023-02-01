import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  pass: string = '';
  constructor(
    private auth: AuthService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {}
  log(data: any) {
    if (this.email == '') {
      alert('enter email');
      return;
    }
    if (this.pass == '') {
      alert('enter pass');
      return;
    }
    this.auth.login(this.email, this.pass);
    this.router.navigate(['/profile']);
  }
}
