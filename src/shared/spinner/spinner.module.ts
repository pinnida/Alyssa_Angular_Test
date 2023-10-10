import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner.component';

// Available options
interface NgxSpinnerConfig {
  type?: string;
}


@NgModule({
  declarations: [SpinnerComponent],
  imports: [
    CommonModule,
    NgxSpinnerModule
  ],
  exports: [
    SpinnerComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
})
export class SpinnerModule { }
