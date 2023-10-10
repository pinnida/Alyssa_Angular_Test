import { NG_VALIDATORS, AbstractControl, RequiredValidator, Validators } from '@angular/forms';
import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[required]',
  providers: [{ provide: NG_VALIDATORS, useExisting: RequiredValidatorDirective, multi: true }],
})
export class RequiredValidatorDirective extends RequiredValidator implements OnInit {

  errorMessage = 'โปรดระบุข้อมูลที่จำเป็นให้ครบถ้วน';

  private parent: any;
  private errorMessageElement: any;

  constructor(
    private renderer: Renderer2,
    private hostElement: ElementRef) {
    super();
  }

  ngOnInit() {
    this.parent = this.hostElement.nativeElement.parentNode;
  }

  override validate(control: AbstractControl): any | null {
    setTimeout(() => {
      let result = this.required ? Validators.required(control) : null;
      if (result && control.errors && !control.value) {
        this.createMessage(this.errorMessage);
        return result;
      } else {
        this.removeMessage();
        return null;
      }
    }, 50);
  }

  //  /**
  //  * @description
  //  * Method that validates whether the control is empty.
  //  * Returns the validation result if enabled, otherwise null.
  //  * Source: https://indepth.dev/posts/1319/the-best-way-to-implement-custom-validators
  //  */
  //   validate(control: AbstractControl): ValidationErrors|null {
  //     return this.required ? Validators.required(control) : null;
  //   }

  // override validate(control: AbstractControl): { [key: string]: any } | null {

  //   const result = super.validate(control);
  //   if (result) {
  //     this.createMessage(this.errorMessage);
  //   } else {
  //     // not allow whitespace only
  //     if (this.required && typeof control.value === 'string' && control.value.trim().length === 0) {
  //       this.createMessage(this.errorMessage);
  //       return {
  //         required: true,
  //       };
  //     }
  //     this.removeMessage();
  //   }
  //   return result;
  // }

  private createMessage(message: string) {
    if (!this.errorMessageElement) {
      this.errorMessageElement = this.renderer.createElement('span');
      const text = this.renderer.createText(message);
      this.renderer.addClass(this.errorMessageElement, 'p-error');
      this.renderer.appendChild(this.errorMessageElement, text);
      if (this.parent) {
        this.renderer.appendChild(this.parent, this.errorMessageElement);
      }
    }
  }

  private removeMessage() {
    if (this.errorMessageElement) {
      this.renderer.removeChild(this.parent, this.errorMessageElement);
      this.errorMessageElement = null;
    }
  }
}
