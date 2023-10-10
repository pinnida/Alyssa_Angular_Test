import { Injectable } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ThaiCalendarService {
  constructor(private config: PrimeNGConfig) {
    this.config.setTranslation({
      dayNames: [
        'วันอาทิตย์',
        'วันจันทร์',
        'วันอังคาร',
        'วันพุธ',
        'วันพฤหัสบดี',
        'วันศุกร์',
        'วันเสาร์',
      ],
      weekHeader: 'สัปดาห์',
      dayNamesShort: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.	', 'ส.'],
      dayNamesMin: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.	', 'ส.'],
      monthNames: [
        'มกราคม',
        'กุมภาพันธ์',
        'มีนาคม',
        'เมษายน',
        'พฤษภาคม',
        'มิถุนายน',
        'กรกฎาคม',
        'สิงหาคม',
        'กันยายน',
        'ตุลาคม',
        'พฤศจิกายน',
        'ธันวาคม',
      ],
      monthNamesShort: [
        'ม.ค.',
        'ก.พ.',
        'มี.ค.',
        'เม.ย.',
        'พ.ค.',
        'มิ.ย.',
        'ก.ค.',
        'ส.ค.',
        'ก.ย.',
        'ต.ค.',
        'พ.ย.',
        'ธ.ค.',
      ],
      dateFormat: 'dd/mm/yy',
    });
  }
}
