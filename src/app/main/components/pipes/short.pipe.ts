import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from "lodash";

@Pipe({
  name: 'sort'
})
export class ShortPipe implements PipeTransform {

  transform(value: any[], key: string, reverse: boolean = false): any[] {
    if (!value || !key) {
      return value;
    }
    return orderBy(value, [key], [reverse ? 'desc' : 'asc']);
  }

}
