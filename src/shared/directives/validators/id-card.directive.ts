import { NG_VALIDATORS } from '@angular/forms';
import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { BaseValidatorDirective } from './BaseValidatorDirective';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[vIdCard]',
  providers: [{ provide: NG_VALIDATORS, useExisting: IdCardValidatorDirective, multi: true }],
})
export class IdCardValidatorDirective extends BaseValidatorDirective {

  override errorMessage = 'กรุณาระบุ เลขประจำตัวประชาชนให้ถูกต้อง';
  override errorToken = 'idCard';

  constructor(
    renderer: Renderer2,
    hostElement: ElementRef) {
    super(renderer, hostElement);
  }

  override isValid(value: any) {
    if (value.length !== 13) {
      return false;
    }

    let sum = 0;
    for (let i = 0; i < 12; i++) {
      sum += parseFloat(value.charAt(i)) * (13 - i);
    }

    if ((11 - sum % 11) % 10 !== parseFloat(value.charAt(12))) {
      return false;
    }

    return true;
  }

}
