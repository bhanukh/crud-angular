import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserdataService } from '../service/userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(
    private _regUser: UserdataService,
    private http: HttpClient,
    private router: Router
  ) {}

  userData: any = {};
  // getData(data:NgForm){
  //      console.log(data)
  //       this.userData=data
  //       this.data.push({data})
  //       console.log(this.data)

  // }
  realReg(postData: {
    fname: string;
    lname: string;
    email: string;
    designation: string;
    pass: string;
  }) {
    this.http
      .post(
        'https://crud-app-2f179-default-rtdb.firebaseio.com/user.json',
        postData
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  getData(data: any) {
    this._regUser.register(data);
    //.subscribe(() => {
    console.log(data);
    //     this.router.navigate(['/login']);
    //   });
  }
}
