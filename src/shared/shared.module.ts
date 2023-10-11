import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// pipes
import { CustomDatePipe, CustomDateYearPipe, CustomDecimalPipe, CustomDecimal3Pipe, ThaiDatePipe, CustomTimePipe } from './pipes';

// directives
import {
  RequiredValidatorDirective, CountryCodeValidatorDirective, CurrencyCodeValidatorDirective,
  EmailManyValidatorDirective, EmailValidatorDirective,
  IdCardValidatorDirective, MaxValidatorDirective, MinValidatorDirective, MaxLengthValidatorDirective, MinLengthValidatorDirective
} from './directives';

// modules
import { ThaiCalendarModule } from './directives/thai-calendar/thai-calendar.module';
import { MaterialModule } from './material/material.module';
import { primengModule } from './primeng/primeng.module';
import { SpinnerModule } from './spinner/spinner.module';

// components
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';


// mockup services
import { MockService } from './services/mock.service';
import { Mock2Service } from './services/mock2.service';
/////////////////////////////


const components: any[] = [
  BreadcrumbsComponent
];

const pipes: any[] = [
  CustomDatePipe,
  CustomDateYearPipe,
  CustomDecimalPipe,
  CustomDecimal3Pipe,
  ThaiDatePipe,
  CustomTimePipe
];

const directives: any[] = [
  CountryCodeValidatorDirective,
  CurrencyCodeValidatorDirective,
  RequiredValidatorDirective,
  EmailManyValidatorDirective,
  EmailValidatorDirective,
  IdCardValidatorDirective,
  MaxValidatorDirective,
  MinValidatorDirective,
  MaxLengthValidatorDirective,
  MinLengthValidatorDirective
];

const mockServices: any[] = [
  MockService,
  Mock2Service,
];



@NgModule({
  declarations: [
    ...components,
    ...pipes,
    ...directives,
  ],
  imports: [
    CommonModule,
    primengModule,
    MaterialModule,
    SpinnerModule,
    ThaiCalendarModule
  ],
  exports: [
    primengModule,
    MaterialModule,
    SpinnerModule,
    ThaiCalendarModule,
    ...components,
    ...pipes,
    ...directives
  ],
  providers: [
    mockServices,
    Mock2Service
  ]
})
export class SharedModule { }
