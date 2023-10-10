import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThaiCalendarDirective } from './thai-calendar.directive';
import { CalendarModule } from 'primeng/calendar';


@NgModule({
  imports: [
    CommonModule,
    CalendarModule
  ],
  declarations: [ThaiCalendarDirective],
  exports:[ThaiCalendarDirective,CalendarModule]
})
export class ThaiCalendarModule { }