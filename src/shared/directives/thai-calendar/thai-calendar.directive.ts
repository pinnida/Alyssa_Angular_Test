import { Directive } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Calendar } from 'primeng/calendar';
import { ThaiCalendarService } from './thai-calendar.service';

// Source: https://stackblitz.com/edit/angular-ivy-wsga4g?file=src%2Fapp%2Fapp.component.html
@Directive({
  selector: '[appThaiCalendar]',
})
export class ThaiCalendarDirective {
  constructor(
    private calendar: Calendar,
    private thaiCalendarService: ThaiCalendarService
  ) {
    const getYear = this.calendar.getYear;
    this.calendar.getYear = (...args: any) => {
      return getYear.apply(calendar, args) + 543;
    };

    let value: string;
    Object.defineProperty(this.calendar, 'inputFieldValue', {
      set: (_value: string) => {
        let format = this.calendar.getDateFormat();
        format = format.replace(/d+/, '\\d+');
        format = format.replace(/y+/g, '(\\d+)');
        format = format.replace(/m+/, '\\d+');
        const reg = new RegExp(format, 'g');
        if (_value) {
          let [valueExec, yearStr] = reg.exec(_value)!;
          valueExec = valueExec.replace(yearStr, `${Number(yearStr) + 543}`);
          value = valueExec;
        } else {
          value = _value;
        }
      },
      get: () => {
        return value;
      },
    });
  }
}
