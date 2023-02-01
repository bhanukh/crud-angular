import { Component } from '@angular/core';
import { UserdataService } from '../service/userdata.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  //user$ = this.userauth.currentUser$;
  userData: any;
  constructor(
    private auth: UserdataService,
    private userauth: AuthService,
    private http: HttpClient
  ) {}
  ngOnInit() {
    // this.auth.userData().subscribe((data: any) => {
    //   this.userData = data;
    //   console.log(data);
    // });
  }
  getUserData(token: string) {
    this.http
      .post<any>(
        `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=[{AIzaSyDmBJibWe-A-LKmN8F1hJ26nGSKgtLPV70}]`,
        {
          idToken: token,
        }
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
}
