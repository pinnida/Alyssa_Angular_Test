import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aDecimal3'
})
export class CustomDecimal3Pipe implements PipeTransform {

  constructor(private decimalPipe: DecimalPipe) { }

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(value: number): any {
    return this.decimalPipe.transform(value, '1.3-3');
  }

}
