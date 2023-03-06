import { Component , OnInit } from '@angular/core';
import { DatatableService } from 'src/app/service/datatable.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  empList:any=[];
constructor(private service: DatatableService){
  this.emp()
}
  ngOnInit(): void {
  }
    emp(){
      this.service.users().subscribe((res:any)=>{
        this.empList=res
        console.log(res);

      })
    }

}
