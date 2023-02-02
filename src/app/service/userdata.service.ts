import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class UserdataService {
  constructor(private http: HttpClient, private fireauth: AngularFireAuth) {}
}
