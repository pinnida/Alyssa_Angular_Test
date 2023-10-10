import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aDateYear'
})
export class CustomDateYearPipe implements PipeTransform {

  constructor(private datePipe: DatePipe) { }

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(value: Date): any {
    if (value) {
      return this.datePipe.transform(value, 'yyyy');
    }
    return '';
  }

}
