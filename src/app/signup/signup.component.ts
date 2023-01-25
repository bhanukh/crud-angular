import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
    list:any[]=[]
    userData:any ={};
    getData(data:NgForm){
         console.log(data)
          this.userData=data
          this.list.push({data})
          console.log(this.list)
          
    }
}
