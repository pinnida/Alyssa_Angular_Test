import { NG_VALIDATORS } from '@angular/forms';
import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
import { BaseValidatorDirective } from './BaseValidatorDirective';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[vMax]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MaxValidatorDirective, multi: true }],
})
export class MaxValidatorDirective extends BaseValidatorDirective {

  @Input() vMax!: number;

  override errorMessage = '';
  override errorToken = 'max';

  constructor(
    renderer: Renderer2,
    hostElement: ElementRef) {
    super(renderer, hostElement);
  }

  override isValid(value: any) {
    this.errorMessage = `กรุณาระบุ เลขไม่เกิน ${this.vMax}`;
    return value <= this.vMax;
  }

}
