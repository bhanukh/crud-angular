import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

export type UserType = {
  fname: string;
  lname: string;
  email: string;
  designation: string;
  pass: string;
};

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
    this.fireauth.signInWithEmailAndPassword(email, pass).then(
      () => {
        // localStorage.setItem('token', 'true');
        this.router.navigate(['/profile']);
      },
      (Error) => {
        console.log('error', Error);
        this.router.navigate(['/login']);
      }
    );
  }
  //sign up
  register(email: string, pass: string) {
    this.fireauth
      .createUserWithEmailAndPassword(email, pass)
      .then(() => console.log('user successfully created'));
  }
  //register
  regUser(data: any) {
    return this.http.post(
      'https://crud-app-2f179-default-rtdb.firebaseio.com/user.json',
      data
    );
  }

  //logout
  logout() {
    this.fireauth.signOut().then(
      () => {
        // localStorage.removeItem('token');
        this.router.navigate(['/login']);
      },
      (err) => {
        alert(err.message);
      }
    );
  }
}
