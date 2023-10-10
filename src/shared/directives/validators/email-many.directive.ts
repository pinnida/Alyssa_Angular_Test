import { NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { BaseValidatorDirective } from './BaseValidatorDirective';

// lodash
import * as _ from 'lodash';
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[vEmailMany]',
  providers: [{ provide: NG_VALIDATORS, useExisting: EmailManyValidatorDirective, multi: true }],
})
export class EmailManyValidatorDirective extends BaseValidatorDirective {

  override errorMessage = 'กรุณาระบุ อีเมล์ให้ถูกต้อง เช่น mail@apthai.com; ';
  override errorToken = 'email';
  // regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  regex = /^[a-zA-Z0-9][-a-zA-Z0-9.-_]+@([-a-zA-Z0-9]+\.)+[a-zA-Z]{0,5}$/;

  constructor(
    renderer: Renderer2,
    hostElement: ElementRef) {
    super(renderer, hostElement);
  }

  // ของเดิม
  // isValid(value) {
  //   console.log(value);
  //   return this.regex.test(value);
  // }

  // ของใหม่
  override isValid(value : any) {
    let emails = value.split(';');
    let invalidEmails = [];

    for (let i = 0; i < emails.length; i++) {
      if (!this.validateEmail(emails[i].trim())) {
        invalidEmails.push(emails[i]);
      }
    }

    invalidEmails = invalidEmails.filter(e => e !== '');

    if (invalidEmails.length > 0) {
      // let text = '';
      // invalidEmails.forEach(email => { text = text + email + ',' });
      // text = text.substring(0, text.length - 1);
      // this.errorMessage = 'กรุณาระบุอีเมล ' + text + ' ให้ถูกต้อง';
      return false
    }

    return true
  }

  validateEmail(email: any) {
    return this.regex.test(email);
  }
}
