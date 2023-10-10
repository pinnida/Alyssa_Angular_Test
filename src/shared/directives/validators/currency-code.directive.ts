import { NG_VALIDATORS } from '@angular/forms';
import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { BaseValidatorDirective } from './BaseValidatorDirective';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[vCurrencyCode]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CurrencyCodeValidatorDirective, multi: true }],
})
export class CurrencyCodeValidatorDirective extends BaseValidatorDirective {

  override errorMessage = 'กรุณาระบุตัวย่อสกุลเงินด้วยตัวอักษรภาษาอังกฤษ 3 หลักเท่านั้น';
  override errorToken = 'currencyCode';
  regex = /^[a-zA-Z]{3}$/;

  constructor(
    renderer: Renderer2,
    hostElement: ElementRef) {
    super(renderer, hostElement);
  }

  override isValid(value: any) {
    return this.regex.test(value);
  }
}
