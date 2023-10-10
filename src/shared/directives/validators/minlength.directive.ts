import { NG_VALIDATORS } from '@angular/forms';
import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
import { BaseValidatorDirective } from './BaseValidatorDirective';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[vMinLength]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinLengthValidatorDirective, multi: true }],
})
export class MinLengthValidatorDirective extends BaseValidatorDirective {

  @Input() vMinLength!: number;

  override errorMessage = '';
  override errorToken = 'min';

  constructor(
    renderer: Renderer2,
    hostElement: ElementRef) {
    super(renderer, hostElement);
  }

  override isValid(value: any) {
    if (value.length < this.vMinLength) {
      this.errorMessage = `กรุณาระบุ ตัวอักษรไม่น้อยกว่า ${this.vMinLength} ตัวอักษร`;
      return false
    }

    return true;
  }

}
