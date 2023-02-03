import { Component, OnInit } from '@angular/core';
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
    this.auth.login(this.email, this.pass).then(() => {
      localStorage.getItem('user');

      this.router.navigate(['/profile']);
    });
  }
}
