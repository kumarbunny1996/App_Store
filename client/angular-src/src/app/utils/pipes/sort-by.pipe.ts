import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(value: Array<any>, args?: any[]): Array<any> {
    if (value) {
      const sortField = args[0];
      value.sort((a: any, b: any): any => {
        if (a[sortField] < b[sortField]) {
          return -1;
        } else if (a[sortField] > b[sortField]) {
          return 1;
        } else {
          return 0;
        }
      });
      return value;
    }
  }
}
