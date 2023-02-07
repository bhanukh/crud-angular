import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserdataService } from 'src/app/service/userdata.service';
import { Database } from '@angular/fire/database';
import { Firestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  userData: any = [];
  data: any;
  userInfo: any;
  uid: any;
  constructor(
    private http: HttpClient,
    private auth: UserdataService,
    private fire: Firestore,
    private db: Database
  ) {
    this.data = localStorage.getItem('data');
    this.userData = JSON.parse(this.data);
    console.log(this.userData);
  }

  ngOnInit() {}
}
