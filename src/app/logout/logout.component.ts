import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from '../service/userdata.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent {
  constructor(private auth: UserdataService, private router: Router) {}

  logout() {
    this.auth.logout();
  }
}
