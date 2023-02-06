import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(private auth: AuthService, private router: Router) {}

  userData: any = {};

  getData(data: any) {
    this.auth.register(data).then((resp) => {
      console.log(resp);
      this.router.navigate(['userReg']);
    });
  }
}
