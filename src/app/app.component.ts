import { Component } from '@angular/core';
import { UserdataService } from './service/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudapp';
  users: any;
  constructor(private userData: UserdataService) {
    userData.users().subscribe((data) => {
      console.log(data)
      this.users = data
    }
    );

  }
}
