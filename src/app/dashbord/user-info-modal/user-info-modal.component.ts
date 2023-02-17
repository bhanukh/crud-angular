import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-info-modal',
  templateUrl: './user-info-modal.component.html',
  styleUrls: ['./user-info-modal.component.css'],
})
export class UserInfoModalComponent {
  @Input() fillup = {};
  @Output()
  submitData: EventEmitter<any> = new EventEmitter();
  constructor() {}
}
