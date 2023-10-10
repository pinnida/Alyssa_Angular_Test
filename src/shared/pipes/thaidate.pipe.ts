import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thaidate'
})
export class ThaiDatePipe implements PipeTransform {

  constructor(private datePipe: DatePipe) {}


  // example
  // {{ '2022-09-08' | thaidate: 'full'}} 
  // {{ '2022-09-08' | thaidate: 'medium'}} 
  // {{ '2022-09-08' | thaidate: 'short'}} 
  // {{ '2022-09-08' | thaidate: 'shortnum'}} 
  // {{ '2022-09-08' | thaidate: 'fullandtime' }} 


  transform(date: string, format: string): string {
    let ThaiDay = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์']
    let numThaiMonth = [
      '01', '02', '03', '04', '05', '06',
      '07', '08', '09', '10', '11', '12'
    ];
    let shortThaiMonth = [
      'ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.',
      'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'
    ];
    let longThaiMonth = [
      'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
      'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
    ];
    let inputDate = new Date(date);
    let dataDate = [inputDate.getDay(), inputDate.getDate(), inputDate.getMonth(), inputDate.getFullYear()];
    let dataTime = (date.length > 11) ? date.substring(date.length, 11) : date;
    console.log(inputDate.getMinutes());
    console.log(inputDate.getMinutes());

    let outputDateFull = [
      'วัน ' + ThaiDay[dataDate[0]],
      'ที่ ' + dataDate[1],
      'เดือน ' + longThaiMonth[dataDate[2]],
      'พ.ศ. ' + (dataDate[3] + 543)
    ];
    let outputDateShort = [
      dataDate[1],
      shortThaiMonth[dataDate[2]],
      dataDate[3] + 543
    ];
    let outputDateMedium = [
      dataDate[1],
      longThaiMonth[dataDate[2]],
      dataDate[3] + 543
    ];
    //
    let outputDateShortNum = [
      dataDate[1],
      '/' + numThaiMonth[dataDate[2]],
      '/' + (dataDate[3] + 543)
    ]
    console.log('dataTime', dataTime);
    let outputDateFullAndTime = [
      dataDate[1],
      '/' + numThaiMonth[dataDate[2]],
      '/' + (dataDate[3] + 543),
      ' ' + dataTime.substring(0, 8)
    ]
    //
    let returnDate: string;
    returnDate = outputDateMedium.join(" ");
    if (format == 'full') {
      returnDate = outputDateFull.join(" ");
    }
    if (format == 'medium') {
      returnDate = outputDateMedium.join(" ");
    }
    if (format == 'short') {
      returnDate = outputDateShort.join(" ");
    }
    if (format == 'shortnum') {
      returnDate = outputDateShortNum.join("");
    }
    if (format == 'fullandtime') {
      returnDate = outputDateFullAndTime.join("");
    }
    return returnDate;
  }
}
