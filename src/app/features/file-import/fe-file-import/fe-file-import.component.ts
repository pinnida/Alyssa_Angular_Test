import { Component } from '@angular/core';

// dayjs
import * as dayjs from 'dayjs';
import { Subscription } from 'rxjs';

// services
import { MockService } from 'src/shared/services/mock.service';
import { Mock2Service } from 'src/shared/services/mock2.service';

@Component({
  selector: 'fe-file-import',
  templateUrl: './fe-file-import.component.html',
  styleUrls: ['./fe-file-import.component.scss']
})
export class FeFileImportComponent {
  busy!: Subscription;
  rows: any[] = [];
  data: any;

  showLoading = false
  value: string | undefined;
  cities: any[] | undefined;
  selectedCity: any | undefined;
  products!: any[];
  cols!: any[];



  constructor(
    private mockService: MockService,
    private mock2Service: Mock2Service,
  ) {
    console.log('dayjs', dayjs().format('YYYY-MM-DD'));
  }

  ngOnInit() {
    this.getData();  // solution1
    this.getData2(); // solution2 - subscribe
    this.getData3(); // solution3 - promise

    this.cols = [
      { header: 'ID', field: '_id', },
      { header: 'country_code', field: 'country_code', },
      { header: 'path', field: 'path', },
      { header: 'file_type', field: 'file_type', },
      { header: 'discovered_time', field: 'discovered_time', },
      { header: 'end_time', field: 'end_time', },
      { header: 'status', field: 'status', },
      { header: 'total_record', field: 'total_record', },
      { header: 'total_success', field: 'total_success', },
      { header: 'total_error', field: 'total_error', },
    ];

    this.products = [
      {
        _id: 'PLU_20220610.csv',
        country_code: 'TH',
        path: '/LABEL/OUT/INT_BUY_68946_Item/PLU_20220610.csv',
        file_type: 'PLU',
        discovered_time: new Date('2022-11-24T17:26:17.955Z'),
        end_time: new Date('2022-11-24T17:29:57.865Z'),
        status: 'ERROR',
        total_record: 394483,
        total_success: 374306,
        total_error: 20177
      },
      {
        _id: 'PLU_20220610.csv',
        country_code: 'TH',
        path: '/LABEL/OUT/INT_BUY_68946_Item/PLU_20220610.csv',
        file_type: 'PLU',
        discovered_time: new Date('2022-11-24T17:26:17.955Z'),
        end_time: new Date('2022-11-24T17:29:57.865Z'),
        status: 'ERROR',
        total_record: 394483,
        total_success: 374306,
        total_error: 20177
      },
      {
        _id: 'PLU_20220610.csv',
        country_code: 'TH',
        path: '/LABEL/OUT/INT_BUY_68946_Item/PLU_20220610.csv',
        file_type: 'PLU',
        discovered_time: new Date('2022-11-24T17:26:17.955Z'),
        end_time: new Date('2022-11-24T17:29:57.865Z'),
        status: 'ERROR',
        total_record: 394483,
        total_success: 374306,
        total_error: 20177
      },
    ]

    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }


  private getData() {
    if (this.busy) {
      this.busy.unsubscribe();
    }
    this.busy = this.mockService.getList$(
      // undefined,
      // this.page.page,
      // this.page.perPage,
      // this.sort.sortBy,
      // this.sort.asc,
      // headerResponse,
    ).subscribe(data => {
      console.log('getData', data)
      this.rows = data;
      // this.page.totalCount = headerResponse.totalCount!;
    });
  }

  getData2() {
    this.mock2Service.getMockProductsSmall()
      .subscribe((data: any) =>
      {
              console.log('getData2', data),
        this.data = data.data
      }

      );
  }

  getData3() {
    this.mock2Service.getMockProductsSmall_promise().then(data => {
      console.log('data3=>', data);
    });
  }
}
