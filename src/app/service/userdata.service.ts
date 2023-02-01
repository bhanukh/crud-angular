import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { idToken } from '@angular/fire/auth';

export interface UserType {
  id?: string;
  fname: string;
  lname: string;
  email: string;
  designation: string;
  pass: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserdataService {
  constructor(
    private http: HttpClient,
    private fireauth: AngularFireAuth,
    private router: Router
  ) {
    console.log(this.fireauth);
  }

  //register
  // regUser(data: any) {
  //   return this.http.post(
  //     'https://crud-app-2f179-default-rtdb.firebaseio.com/user.json',
  //     data
  //   );
  // }
  //card
  userData() {
    return this.http.get(
      'https://crud-app-2f179-default-rtdb.firebaseio.com/user.json'
    );
  }
}
