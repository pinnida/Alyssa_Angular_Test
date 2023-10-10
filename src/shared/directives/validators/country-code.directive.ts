import { NG_VALIDATORS } from '@angular/forms';
import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { BaseValidatorDirective } from './BaseValidatorDirective';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[vCountryCode]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CountryCodeValidatorDirective, multi: true }],
})
export class CountryCodeValidatorDirective extends BaseValidatorDirective {

  override errorMessage = 'กรุณาระบุด้วยตัวอักษรภาษาอังกฤษ 2 หลัก เท่านั้น';
  override errorToken = 'countryCode';
  regex = /^[a-zA-Z]{2}$/;

  constructor(
    renderer: Renderer2,
    hostElement: ElementRef) {
    super(renderer, hostElement);
  }

  override isValid(value: any) {
    return this.regex.test(value);
  }
}
