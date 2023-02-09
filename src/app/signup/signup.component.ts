import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(private auth: AuthService, private router: Router) {}

  userData: any = {};
  // resetData(newForm: NgForm) {
  //   newForm.reset();
  // }
  getData(data: any) {
    this.auth
      .register(data)
      .then((resp) => {
        console.log(resp);
        this.router.navigate(['userReg']);
      })
      .catch((error) => {
        alert('user already registred');
        this.router.navigate(['']);
      });
  }
}
