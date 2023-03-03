import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info-modal',
  templateUrl: './user-info-modal.component.html',
  styleUrls: ['./user-info-modal.component.css'],
})
export class UserInfoModalComponent implements OnInit {
  userInfo: any;
  @Input() name: string = '';
  @Input() designation: string = '';
  @Input() number: number = 0;
  @Output()
  fillup: EventEmitter<any> = new EventEmitter();

  @Output()
  submitData: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.userInfo = {
      userName: this.name,
      designation: this.designation,
      number: this.number,
    };
  }
  constructor() {}
}
