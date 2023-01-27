import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
    data:any[]=[]
    userData:any ={};
    getData(data:NgForm){
         console.log(data)
          this.userData=data
          this.data.push({data})
          console.log(this.data)
          
    }
}
