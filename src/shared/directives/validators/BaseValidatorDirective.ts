import { Validator, AbstractControl } from '@angular/forms';
import { ElementRef, Renderer2, OnInit, Directive } from '@angular/core';

@Directive({
  selector: '[BaseValidatorDirective]',
  standalone: true
})
export class BaseValidatorDirective implements OnInit, Validator {

  errorMessage!: string;
  errorToken!: string;

  private parent: any;
  private errorMessageElement: any;

  constructor(
    private renderer: Renderer2,
    private hostElement: ElementRef) {
  }

  public isValid(value: any) {
    return true;
  }

  ngOnInit() {
    this.parent = this.hostElement.nativeElement.parentNode;
  }

  validate(control: AbstractControl): { [key: string]: any; } | null {
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
    return { [this.errorToken]: true };
  }

  private createMessage(message: string) {
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
}
