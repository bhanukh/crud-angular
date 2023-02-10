import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { userDetails } from '../signup/user-details/user-details.component';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserdataService {
  user: any;
  userData: any;
  userArr: any = [];
  constructor(private http: HttpClient, private fireauth: AngularFireAuth) {
    // this.user = localStorage.getItem('user');
    // this.userData = JSON.parse(this.user);
  }
  //post register deails
  register(data: userDetails) {
    return this.http.post(
      'https://crud-app-2f179-default-rtdb.firebaseio.com/user.json',
      data
    );
  }

  //get user details
  getData() {
    return this.http
      .get<any>('https://crud-app-2f179-default-rtdb.firebaseio.com/user.json')
      .pipe(
        map((resData) => {
          console.log(resData);
          this.userArr = Object.entries(resData).map((eachItem: any) => {
            return {
              userId: eachItem[0],
              ...eachItem[1],
            };
          });
          return this.userArr;
        })
      );
  }
  loggedInUser(uid: string): Observable<string> {
    return this.http.get<string>(
      'https://crud-app-2f179-default-rtdb.firebaseio.com/user/' + uid + '.json'
    );
  }

  //update user
  updateInfo(data: userDetails): Observable<string> {
    console.warn(data.userId);

    return this.http.put<string>(
      'https://crud-app-2f179-default-rtdb.firebaseio.com/user/' +
        data.userId +
        '.json',
      data
    );
  }
  //select user details
  getSelectedInfo(userId: string): Observable<string> {
    return this.http.get<string>(
      'https://crud-app-2f179-default-rtdb.firebaseio.com/user/' +
        userId +
        '.json'
    );
  }
  //delete user
  deleteUser(userId: string): Observable<string> {
    return this.http.delete<string>(
      'https://crud-app-2f179-default-rtdb.firebaseio.com/user/' +
        userId +
        '.json'
    );
  }
}
