import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

export interface UserType {
  id?: string;
  userName: string;
  email: string;
  designation: string;
  phone: number;
  pass: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  res: any;
  result: any;

  constructor(private fireauth: AngularFireAuth, private router: Router) {}

  //login
  login(email: string, pass: string) {
    return this.fireauth
      .signInWithEmailAndPassword(email, pass)
      .then((response) => {
        const respUser = (response.user?.multiFactor as any).user;
        const user = {
          refreshToken: respUser.stsTokenManager.refreshToken,
          accessToken: respUser.stsTokenManager.accessToken,
          uid: respUser.uid,
          email: respUser.email,
        };
        localStorage.setItem('logInUser', JSON.stringify(user));
      });
  }
  //sign up
  async register(user: UserType) {
    return this.fireauth
      .createUserWithEmailAndPassword(user.email, user.pass)
      .then((response) => {
        // this.fireauth
        //   .onAuthStateChanged((response) => {
        //     if (response) res: this.fireauth.currentUser;
        //     response?.updateProfile({
        //       displayName: user.userType,

        //     });

        const respUser = (response.user?.multiFactor as any).user;
        const user = {
          refreshToken: respUser.stsTokenManager.refreshToken,
          accessToken: respUser.stsTokenManager.accessToken,
          uid: respUser.uid,
          email: respUser.email,
        };
        localStorage.setItem('user', JSON.stringify(user));
      });
  }

  //logout
  logout() {
    return this.fireauth.signOut().then((user) => {
      localStorage.removeItem('user');
      localStorage.clear();
      this.router.navigate(['']);
    });
  }

  isLoggedIn() {
    this.result = localStorage.getItem('logInUser');
    const usertoken = JSON.parse(this.result);
    if (usertoken != null) {
      return true;
    }
    return false;
  }
}
