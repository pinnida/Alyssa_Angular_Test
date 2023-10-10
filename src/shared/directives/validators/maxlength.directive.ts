import { NG_VALIDATORS } from '@angular/forms';
import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
import { BaseValidatorDirective } from './BaseValidatorDirective';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[vMaxLength]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MaxLengthValidatorDirective, multi: true }],
})
export class MaxLengthValidatorDirective extends BaseValidatorDirective {

  @Input() vMaxLength!: number;

  override errorMessage = '';
  override errorToken = 'max';

  constructor(
    renderer: Renderer2,
    hostElement: ElementRef) {
    super(renderer, hostElement);
  }

  override isValid(value: any) {
    if (value.length > this.vMaxLength) {
      this.errorMessage = `กรุณาระบุ ตัวอักษรไม่เกิน ${this.vMaxLength} ตัวอักษร`;
      return false
    }

    return true;
  }

}
