import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { local } from 'src/app/model/type';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  userData: any;
  data: any;
  display: string | undefined;
  constructor(private http: HttpClient) {
    this.data = localStorage.getItem('user');
    console.log(JSON.parse(this.data));

    console.log(this.data);
  }
  ngOnInit() {}
  getUserData() {}
}
