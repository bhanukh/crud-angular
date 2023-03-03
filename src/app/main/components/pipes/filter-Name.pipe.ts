import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterName'
})
export class ComponentPipe implements PipeTransform {

  transform(users: any, searchValue:string): any {

    if(searchValue){

      searchValue = searchValue.trim();
      return users.filter(function(
        user: {
          [x: string]: any;
          userName: string | string;}
          ){
            return user.userName.toLowerCase().indexOf(searchValue)> -1
          })
        }
    else{
      return  users
      }
    }

  }


