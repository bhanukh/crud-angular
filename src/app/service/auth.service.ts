import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { switchMap } from 'rxjs/operators';
import { authState, user } from '@angular/fire/auth';
import { Auth } from '@angular/fire/auth/firebase';
import * as firebase from 'firebase/compat';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export interface UserType {
  id?: string;
  fname: string;
  lname: string;
  email: string;
  designation: string;
  pass: string;
}
const auth = firebase.default.auth();
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //currentUser$ = authState(this.auth);
  currentUser: any;
  token!: string;

  constructor(
    private http: HttpClient,
    private fireauth: AngularFireAuth,
    private router: Router,
    private db: AngularFireDatabase // private auth: Auth
  ) {
    // this.fireauth.authState.subscribe((user) => {
    //   if (user) {
    //     this.userData = user;
    //     localStorage.setItem('user', JSON.stringify(this.userData));
    //     JSON.parse(localStorage.getItem('user')!);
    //   } else {
    //     localStorage.setItem('user', null);
    //     JSON.parse(localStorage.getItem('user')!);
    //     console.log(user);
    //   }
    // });
  }

  //login
  login(email: string, pass: string) {
    return this.fireauth.signInWithEmailAndPassword(email, pass).then(
      (response) => {
        firebase.currentUser
          .getToken()
          .then((token: string) => (this.token = token));
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

  //logout
  logout() {
    return this.fireauth.signOut().then(
      (token) => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      },
      (err) => {
        alert(err.message);
      }
    );
  }
}
