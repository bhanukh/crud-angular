import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserdataService } from 'src/app/service/userdata.service';
import { AuthService } from 'src/app/service/auth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css'],
})
export class DashbordComponent {
  userData: any;
  data: any;
  currentUser: any = [];
  loader = false;
  constructor(
    private http: HttpClient,
    private auth: UserdataService,
    private af: AuthService,
    private toaster: ToastrService
  ) {
    this.data = localStorage.getItem('logInUser');
    this.userData = JSON.parse(this.data);
    console.log("main module")
  }

  ngOnInit() {
    this.loader = true;
    this.auth.getData().subscribe((res) => {
      this.data = res;
      let rep = this.data.find((u: any) => this.userData.uid === u.uid);
      this.currentUser = rep;
      this.loader = false;
    });
  }
  showSuccess() {
    this.toaster.success('Information updated successfully', 'Success');
  }
  editAdmin(currentUser: any) {
    currentUser.isEdit = true;
  }
  updateAdmin(data: any, item: any) {
    data = {
      ...data,
      uid: item.uid,
      email: item.email,
      acessToken: item.accessToken,
      userType: item.userType,
      userId: item.userId,
    };
    this.auth.updateInfo(data).subscribe((res) => {
      this.auth.getData().subscribe((res) => {
        this.data = res;
      });
      item.isEdit = false;
      this.showSuccess();
    });
  }
}
