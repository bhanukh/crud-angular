import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';

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

  //login
  login(email: string, pass: string) {
    return this.fireauth.signInWithEmailAndPassword(email, pass).then(
      (resp) => {
        console.log(resp);

        localStorage.setItem('token', 'true');
      },
      (error) => {
        console.log('error', error);
        this.router.navigate(['/login']);
      }
    );
  }
  //sign up
  register(user: UserType) {
    return this.fireauth
      .createUserWithEmailAndPassword(user.email, user.pass)
      .then(
        () => {
          localStorage.setItem('token', 'true');
          this.router.navigate(['/login']);
        },
        (Error) => {
          console.log('error', Error);
          this.router.navigate(['/register']);
        }
      );
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

  //logout
  logout() {
    this.fireauth.signOut().then(
      () => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      },
      (err) => {
        alert(err.message);
      }
    );
  }
}
