import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserdataService } from 'src/app/service/userdata.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  userData: any;
  data: any;
  constructor(private http: HttpClient, private auth: UserdataService) {
    // this.auth.getData().subscribe((res: any) => {
    //   console.log(res);
    //   this.userData = res;
    // });
  }

  ngOnInit() {}
}
