import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../service/userdata.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  userData: any;
  constructor(private auth: UserdataService) {}

  ngOnInit() {
    this.auth.userData().subscribe((data: any) => {
      this.userData = data;
      console.log(data);
    });
  }
}
