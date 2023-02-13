import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  validateForm!: UntypedFormGroup;
  constructor(
    private auth: AuthService,
    private router: Router,
    private toaster: ToastrService,
    private fb: UntypedFormBuilder
  ) {}
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      pass: [null, [Validators.required]],
    });
  }
  userData: any = {};
  showSuccess() {
    this.toaster.success('user registred successfullly', 'Succes');
  }
  showError() {
    this.toaster.error('Email already registred', 'Error');
  }
  getData(data: any) {
    this.auth
      .register(data)
      .then((resp) => {
        //this.showSuccess();
        this.router.navigate(['']);
      })
      .catch((error) => {
        this.showError();
        this.router.navigate(['register']);
      });
  }
}
