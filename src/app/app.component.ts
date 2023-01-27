import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { UserdataService } from './service/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'crudapp';
  users: any;

  constructor(
    private userData: UserdataService,
    private firestore: Firestore
  ) {}

  ngOnInit(): void {
    const cls = collection(this.firestore, '1');
    collectionData(cls).subscribe((d) => {
      console.log(d);
    });
    this.userData.users().subscribe((data) => {
      console.log(data);
      this.users = data;
    });
  }
}
