import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aDate'
})
export class CustomDatePipe implements PipeTransform {

  constructor(private datePipe: DatePipe) { }

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(value: Date): any {
    if (value) {
      return this.datePipe.transform(value, 'dd/MM/yyyy');
    }
    return '';
  }

}
