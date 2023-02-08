import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserdataService } from 'src/app/service/userdata.service';
import { NzCardComponent } from 'ng-zorro-antd/card';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  userData: any ;
  data: any ;

  constructor(private http: HttpClient, private auth: UserdataService) {
    this.data = localStorage.getItem('logInUser');
    this.userData = JSON.parse(this.data);
    console.log(this.userData);

    //console.log('uid', JSON.parse(this.data));
  }

  ngOnInit() {
    // this.auth.loggedInUser(this.uid).subscribe((res) => {
    //   console.warn(res);
    // });
  }
  userProfile(uid: string) {
    this.auth.loggedInUser(uid).subscribe((res) => {
      console.log(uid);
    });
  }
}
