import { NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { BaseValidatorDirective } from './BaseValidatorDirective';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[vEmail]',
  providers: [{ provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true }],
})
export class EmailValidatorDirective extends BaseValidatorDirective {

  override errorMessage = 'กรุณาระบุ อีเมล์ให้ถูกต้อง';
  override errorToken = 'email';
  regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // regex = /^[a-zA-Z0-9][-a-zA-Z0-9.-_]+@([-a-zA-Z0-9]+\.)+[a-zA-Z]{0,5}$/;   // <-- ใช้ไม่ได้ contact@thannawatchu.maison บอกว่า format ไม่ถูกต้อง
  constructor(
    renderer: Renderer2,
    hostElement: ElementRef) {
    super(renderer, hostElement);
  }

  override isValid(value: any) {
    console.log('value', value);
    return this.regex.test(value);
  }
}
