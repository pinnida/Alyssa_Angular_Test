import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from '@angular/forms';
import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[ngModel][vEng],[ngModel][vThai],[ngModel][vDigit],[ngModel][vSpecial]',
  providers: [{ provide: NG_VALIDATORS, useExisting: NgModelValidatorDirective, multi: true }],
})
export class NgModelValidatorDirective implements OnInit, Validator {

  @Input() vEng!: any | null | undefined;
  @Input() vThai!: any | null | undefined;
  @Input() vDigit!: number | null | undefined;
  @Input() vSpecial!: string | string[] | null | undefined;;

  pattern: string | undefined;
  errorMessage: string | undefined;
  model: any = {};

  private parent: any;
  private errorMessageElement: any;

  constructor(
    private renderer: Renderer2,
    private hostElement: ElementRef) {
  }

  ngOnInit() {
    this.parent = this.hostElement.nativeElement.parentNode;

    // validate digit only
    if (this.vDigit) {
      this.errorMessage = `กรุณาระบุด้วย ตัวเลขอารบิก ${this.vDigit} หลัก เท่านั้น`;
      return;
    }

    // validate other
    this.pattern = '[^';
    const errorMessages: string[] = [];

    if (this.vEng !== undefined || this.vThai !== undefined) {
      this.pattern += '\\s'; // whitespace
      if (this.vEng !== undefined) {
        this.pattern += 'a-zA-Z';
        this.model.eng = true;
        errorMessages.push('อักษรภาษาอังกฤษ');
      }
      if (this.vThai !== undefined) {
        this.pattern += '\\u0E00-\\u0E7F';
        this.model.thai = true;
        errorMessages.push('อักษรภาษาไทย');
      }
    }
    if (this.vDigit !== undefined) {
      this.pattern += '\\d';
      this.model.digit = true;
      errorMessages.push('ตัวเลขอารบิก');
    }
    if (this.vSpecial !== undefined) {
      if (this.vSpecial) {
        if (Array.isArray(this.vSpecial)) {
          this.pattern += this.vSpecial.map(v => this.escapeRegex(v)).join('');
          errorMessages.push(`เครื่องหมาย ${this.vSpecial.join(' ')}`);
        } else {
          this.pattern += this.escapeRegex(this.vSpecial);
          errorMessages.push(`เครื่องหมาย ${this.vSpecial}`);
        }
      } else {
        this.pattern += '\\[\\]\\{\\}\\/\\\\$&+,:;=?~`@#|\'"<>.^*()%!_-';
        errorMessages.push('อักขระ');
      }
      this.model.special = true;
    }
    this.pattern += ']';

    if (errorMessages.length > 1) {
      errorMessages[errorMessages.length - 1] = `หรือ${errorMessages[errorMessages.length - 1]}`;
    }

    this.errorMessage = 'กรุณาระบุด้วย ' + errorMessages.join(' ') + ' เท่านั้น';
  }

  isValid(value: any) {
    // validate digit only
    if (this.vDigit) {
      this.model = { digit: { length: this.vDigit } };
      return new RegExp(`^\\d{${this.vDigit}}$`).test(value);
    }

    // validate other
    let _pattern: any = this.pattern;
    return !new RegExp(_pattern).test(value);
  }

  validate(control: AbstractControl): { [key: string]: any } | null {
    // valid for empty value
    if (control.value === undefined || control.value === null || control.value === '') {
      this.removeMessage();
      return null;
    }

    if (this.isValid(control.value)) {
      this.removeMessage();
      return null;
    }
    this.createMessage(this.errorMessage);
    return { model: this.model };
  }

  private createMessage(message: any) {
    if (!this.errorMessageElement) {
      this.errorMessageElement = this.renderer.createElement('span');
      const text = this.renderer.createText(message);
      this.renderer.addClass(this.errorMessageElement, 'error-message');
      this.renderer.appendChild(this.errorMessageElement, text);
      this.renderer.appendChild(this.parent, this.errorMessageElement);
    }
  }

  private removeMessage() {
    if (this.errorMessageElement) {
      this.renderer.removeChild(this.parent, this.errorMessageElement);
      this.errorMessageElement = null;
    }
  }

  private escapeRegex(str: any) {
    if (['/', '\\', '}', '{', '[', ']'].includes(str)) {
      return `\\${str}`;
    }
    return str;
  }
}
