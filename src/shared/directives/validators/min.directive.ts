import { NG_VALIDATORS } from '@angular/forms';
import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
import { BaseValidatorDirective } from './BaseValidatorDirective';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[vMin]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinValidatorDirective, multi: true }],
})
export class MinValidatorDirective extends BaseValidatorDirective {

  @Input() vMin!: number;

  override errorMessage = '';
  override errorToken = 'min';

  constructor(
    renderer: Renderer2,
    hostElement: ElementRef) {
    super(renderer, hostElement);
  }

  override isValid(value: any) {
    this.errorMessage = `กรุณาระบุ เลขไม่น้อยกว่า ${this.vMin}`;
    return value >= this.vMin;
  }

}
