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
  userType: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  res: any;
  result: any;

  constructor(private fireauth: AngularFireAuth, private router: Router,

    ) {}

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
          userType: respUser.displayName,
        };
        localStorage.setItem('logInUser', JSON.stringify(user));
      });
  }
  //sign up
  async register(user: UserType) {
    return this.fireauth
      .createUserWithEmailAndPassword(user.email, user.pass)
      .then((response) => {
        this.fireauth.onAuthStateChanged((response) => {
          if (response) res: this.fireauth.currentUser;
          response?.updateProfile({
            displayName: user.userType,
          });
        });
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
  // reset password
  resetPassword(email: string) {
    return this.fireauth.sendPasswordResetEmail(email);
  }
  //check user login
  isLoggedIn() {
    this.result = localStorage.getItem('logInUser');
    const usertoken = JSON.parse(this.result);
    if (usertoken != null) {
      return true;
    }
    return false;
  }
}
