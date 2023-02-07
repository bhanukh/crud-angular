import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { userDetails } from '../signup/user-details/user-details.component';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { deleteUser } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class UserdataService {
  user: any;
  userData: any;
  constructor(private http: HttpClient, private fireauth: AngularFireAuth) {
    this.user = localStorage.getItem('user');

    this.userData = JSON.parse(this.user);
    console.log(this.userData);
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
    return this.http.get(
      'https://crud-app-2f179-default-rtdb.firebaseio.com/user.json'
    );
  }
  //delete user
  deleteUser(uid: string): Observable<string> {
    return this.http.delete<string>(
      'https://crud-app-2f179-default-rtdb.firebaseio.com/user/' + uid + '.json'
    );
  }
}
