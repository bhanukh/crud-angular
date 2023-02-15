import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { userDetails } from '../dashbord/user-details/user-details.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserdataService {
  user: any;
  userData: any;
  userArr: any = [];
  constructor(private http: HttpClient, private fireauth: AngularFireAuth) {}
  url = 'https://crud-app-2f179-default-rtdb.firebaseio.com/user/';
  //post register deails
  register(data: userDetails) {
    return this.http.post(this.url + '.json', data);
  }

  //get user details
  getData() {
    return this.http.get<any>(this.url + '.json').pipe(
      map((resData) => {
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
  allData() {
    return this.http.get<any>(this.url + '.json');
  }
  loggedInUser(uid: string): Observable<string> {
    return this.http.get<string>(this.url + uid + '.json');
  }

  //update user
  updateInfo(data: userDetails): Observable<string> {
    return this.http.put<string>(this.url + data.userId + '.json', data);
  }
  //select user details
  getSelectedInfo(userId: string): Observable<string> {
    return this.http.get<string>(this.url + userId + '.json');
  }
  //delete user
  deleteUser(userId: string): Observable<string> {
    return this.http.delete<string>(this.url + userId + '.json');
  }
}
