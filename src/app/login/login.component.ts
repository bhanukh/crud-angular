import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserdataService } from '../service/userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  pass: string = '';
  constructor(private auth: UserdataService, private router: Router) {}

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
