import { Component , OnDestroy, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/service/datatable.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit,OnDestroy {
  empList:any=[];
  dtOptions:DataTables.Settings={};
  dtTrigers: Subject<any>=new Subject<any>();

constructor(private service: DatatableService){
this.emp()
}
  ngOnInit(): void {
    this.dtOptions={
      pagingType:'simple',
    }
  }
  ngOnDestroy(): void {
    this.dtTrigers.unsubscribe()
  }
    emp():void{
      this.service.users().subscribe((res:any)=>{
        this.empList=res
        this.dtTrigers.next(null);
      })
    }
    deleteEmp(id:any){
       console.log(id)
       this.service.delete(id).subscribe((res)=>{
        console.log(res);

        this.service.users().subscribe((resp:any)=>{
          let rep = this.empList.filter((u: any) => this.empList.id !== u.id);
          this.empList=res
        })
        console.log('user deleted successfully')
       })
    }

}
