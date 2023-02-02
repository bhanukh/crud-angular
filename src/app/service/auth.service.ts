import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

export interface UserType {
  id?: string;
  userName: string;
  email: string;
  designation: string;
  pass: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  res: any;

  constructor(private fireauth: AngularFireAuth, private router: Router) {}

  //login
  login(email: string, pass: string) {
    return this.fireauth.signInWithEmailAndPassword(email, pass).then(
      (response) => {
        // console.log(response);

        localStorage.setItem(
          'user',
          JSON.stringify(response.user?.displayName)
        );
        console.log(localStorage.getItem('user'));
      },
      (error) => {
        console.log('error', error);
        this.router.navigate(['/login']);
      }
    );
  }
  //sign up
  async register(user: UserType) {
    return this.fireauth
      .createUserWithEmailAndPassword(user.email, user.pass)
      .then((resp) => {
        this.fireauth
          .onAuthStateChanged((res) => {
            if (res) res: this.fireauth.currentUser;
            res?.updateProfile({
              displayName: user.userName,
              photoURL: user.designation,
            });
            console.log(resp);
            console.log(resp.user?.displayName);
          })
          .catch((error) => {
            console.log('error', error);
            this.router.navigate(['/register']);
          });
      });
  }

  //logout
  logout() {
    return this.fireauth.signOut().then(
      (user) => {
        localStorage.removeItem('user');
        localStorage.clear();
        this.router.navigate(['/login']);
      },
      (err) => {
        alert(err.message);
      }
    );
  }
}
