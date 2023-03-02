import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthService, private router:Router, private toaster:ToastrService){}

  showError(){
    this.toaster.info('You are not logged in, Login first')
  }

  canActivate(){
   if(this.auth.isLoggedIn()){
    return true;
   }
    this.showError();
    this.router.navigate([''])
    return false;


}
}
