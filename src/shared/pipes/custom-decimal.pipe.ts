import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aDecimal'
})
export class CustomDecimalPipe implements PipeTransform {

  constructor(private decimalPipe: DecimalPipe) { }

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(value: number): any {
    return this.decimalPipe.transform(value, '1.2-2');
  }

}
