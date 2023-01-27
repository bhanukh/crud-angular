import { Component } from '@angular/core';
import { UserdataService } from '../service/userdata.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  users: any = [];
  constructor(private userData: UserdataService) {
    userData.users().subscribe((data) => {
      console.log(data)
      this.users = data
    }
    );

  }

}
