import { Component, Input, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'lib-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  @Input() showLoading!: boolean;
  constructor(private spinner: NgxSpinnerService) { }


  ngOnInit() {
    /** spinner starts on init */
    // if (this.showLoading) {
      this.spinner.show();
    // } else {
    //   this.spinner.hide();
    // }



  }

}
