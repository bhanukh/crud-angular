import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserdataService } from 'src/app/service/userdata.service';
import { AuthService } from 'src/app/service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, Observer, Subscriber } from 'rxjs';

import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  isEdit = false;

  @ViewChild('preview', { static: true }) preview: ElementRef | undefined;
  userData: any;
  data: any;
  logInStatus: boolean;
  currentUser: any = [];
  loader = false;

  name = '';
  designation: string = '';
  number: number = 0;
  myImage: Observable<any> | undefined;

  constructor(
    private http: HttpClient,
    private auth: UserdataService,
    private af: AuthService,
    private toaster: ToastrService,
    private afs: AngularFireStorage
  ) {
    this.data = localStorage.getItem('logInUser');
    this.userData = JSON.parse(this.data);

    this.logInStatus = this.af.isLoggedIn();
    this.updateAdmin.bind(this);
  }
  updateInfo = {
    userName: '',
    designation: '',
    number: '',
  };
  loading = false;
  avatarUrl?: string;
  imageUrl: any = [];

  beforeUpload = (
    file: NzUploadFile,
    _fileList: NzUploadFile[]
  ): Observable<boolean> =>
    new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng =
        file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        //this.msg.error('You can only upload JPG file!');
        observer.complete();
        return;
      }
      const isLt2M = file.size! / 1024 / 1024 < 2;
      if (!isLt2M) {
        //this.msg.error('Image must smaller than 2MB!');
        observer.complete();
        return;
      }
      observer.next(isJpgOrPng && isLt2M);
      observer.complete();
    });

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  handleChange(info: { file: NzUploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        // Get this url from response in real world.
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading = false;
          this.avatarUrl = img;
          this.imageUrl = Object.entries(this.avatarUrl);
          //this.updatePicture(this.imageUrl);
          console.log(this.imageUrl);
        });
        break;
      case 'error':
        //this.msg.error('Network error');
        this.loading = false;
        break;
    }
  }
  ngOnInit() {
    this.loader = true;
    this.auth.getData().subscribe((res) => {
      this.data = res;
      let rep = this.data.find((u: any) => this.userData.uid === u.uid);

      this.currentUser = rep;
      localStorage.setItem('userType', this.currentUser.userType);
      this.loader = false;

      this.name = this.currentUser.userName;
      this.designation = this.currentUser.designation;
      this.number = this.currentUser.number;
    });
  }

  showModal(currentUser: any) {
    this.isEdit = true;
    this.updateInfo.userName = this.currentUser.userName;
    this.updateInfo.designation = this.currentUser.designation;
    this.updateInfo.number = this.currentUser.number;
  }

  handleOk(): void {
    console.log('Button ok clicked!');

    this.isEdit = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isEdit = false;
  }

  showSuccess() {
    this.toaster.success('Information updated successfully', 'Success');
  }
  updatePicture(data: any) {
    data = {
      ...data,
      uid: this.currentUser.uid,
      email: this.currentUser.email,
      acessToken: this.currentUser.accessToken,
      userType: this.currentUser.userType,
      userId: this.currentUser.userId,
      userName: this.currentUser.userName,
      designation: this.currentUser.designation,
      number: this.currentUser.number,
    };
    this.auth.updateInfo(data).subscribe((res) => {
      this.auth.getData().subscribe((res) => {
        this.data = res;
        let rep = this.data.find((u: any) => this.userData.uid === u.uid);
        this.currentUser = rep;
      });
      this.showSuccess();
    });
  }
  updateAdmin(data: any) {
    data = {
      ...data,
      uid: this.currentUser.uid,
      email: this.currentUser.email,
      acessToken: this.currentUser.accessToken,
      userType: this.currentUser.userType,
      userId: this.currentUser.userId,
      picture: this.currentUser.picture,
    };
    this.auth.updateInfo(data).subscribe((res) => {
      this.auth.getData().subscribe((res) => {
        console.log(res);
        this.data = res;
        let rep = this.data.find((u: any) => this.userData.uid === u.uid);
        this.currentUser = rep;
        console.log(rep);
        this.isEdit = false;
      });
      this.showSuccess();
    });
  }
}
