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
        const respUser = (response.user?.multiFactor as any).user;
        const user = {
          refreshToken: respUser.stsTokenManager.refreshToken,
          accessToken: respUser.stsTokenManager.accessToken,
          uid: respUser.uid,
          email: respUser.email,
        };
        localStorage.setItem('user', JSON.stringify(user));
      });
    // .catch((error) => {
    //   console.log('error', error);
    //   this.router.navigate(['/register']);
    // });
  }

  //logout
  logout() {
    return this.fireauth.signOut().then(
      (user) => {
        localStorage.removeItem('user');
        localStorage.clear();
        this.router.navigate(['/login']);
      }
      // (err) => {
      //   alert(err.message);
      // }
    );
  }

  isLoggedIn() {
    this.result = localStorage.getItem('logInUser');
    const usertoken = JSON.parse(this.result);

    console.log(usertoken);
    if (usertoken != null) {
      return true;
    }
    return false;
  }
}
