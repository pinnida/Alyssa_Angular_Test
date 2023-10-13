import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { finalize, lastValueFrom } from 'rxjs';

// services
import { AuthenticationService } from 'src/shared/services/authentication.service';
import { SwalService } from 'src/shared/services/swal.service';
import { Mock2Service } from 'src/shared/services/mock2.service';

// data
import { CategoryOptions, PriorityOptions, StatusOptions } from 'src/assets/data/dropdown.data';

// models interface
import { IInput } from 'src/assets/data/interface.model';

// lodash
import * as _ from 'lodash';

// dayjs
import * as dayjs from 'dayjs';

@Component({
  selector: 'fe-home',
  templateUrl: './fe-home.component.html',
  styleUrls: ['./fe-home.component.scss']
})
export class FeHomeComponent {
  showLoading: boolean = false;

  [key: string]: any; // add this line to add an index signature
  displayDialogAddTodo: boolean = false;
  displayDialogDel: boolean = false;
  user$ = this.authenticationSVC.currentUser$;
  columns: any[] = []
  displayedColumns: string[] = ['title', 'description', 'priority', 'category', 'status', 'createDate', 'action'];
  dataSourceTodo = [] as Array<IInput>;
  dataSourceInProgress = [] as Array<IInput>;
  dataSourceDone = [] as Array<IInput>;
  mode: string = 'Create';
  indexSelected!: number | null;
  rowDataSelected!: IInput | null;
  previousStatus!: string | null;
  tableSelected!: string | null;
  myFormFilter!: FormGroup;

  DDL = {
    PriorityOptions: PriorityOptions as Array<any>,
    CategoryOptions: CategoryOptions as Array<any>,
    StatusOptions: StatusOptions as Array<any>,
  };


  constructor(
    private authenticationSVC: AuthenticationService,
    private swalSVC: SwalService,
    private fb: NonNullableFormBuilder,
    private mock2Service: Mock2Service,
  ) { }

  async ngOnInit() {
    this.columns = [
      { field: 'title', header: 'Title' },
      { field: 'description', header: 'Description' },
      { field: 'priority', header: 'Priority' },
      { field: 'category', header: 'Category' },
      { field: 'status', header: 'Status' },
      { field: 'createDate', header: 'CreateDate' },
      { field: 'action', header: 'Action' },
    ];

    this.createForm();

    // DataTables
    this.dataSourceTodo = await this.getDataToDoList();
    this.dataSourceInProgress = await this.getInProgressList();
    this.dataSourceDone = await this.getDoneList();

    // Dropdowns
    this.DDL.PriorityOptions = PriorityOptions;
    this.DDL.CategoryOptions = CategoryOptions;
    this.DDL.StatusOptions = StatusOptions;
  }

  createForm() {
    this.myFormFilter = this.fb.group({
      priority: ['',],
      category: ['',],
      status: ['',],
      startDate: [new Date(),],
      endDate: [new Date(),],
    });
  }

  async getDataToDoList() {
    this.showLoading = true;
    try {
      const resp = await lastValueFrom(this.mock2Service.getToDoList());
      return resp.data;

    } catch (err) {
      this.showLoading = false;
      console.log(err);
    } finally {
      this.showLoading = false;
    }
  }

  async getInProgressList() {
    this.showLoading = true;
    try {
      const resp = await lastValueFrom(this.mock2Service.getInProgressList());
      return resp.data;

    } catch (err) {
      this.showLoading = false;
      console.log(err);
    } finally {
      this.showLoading = false;
    }
  }

  async getDoneList() {
    this.showLoading = true;
    try {
      const resp = await lastValueFrom(this.mock2Service.getDoneList());
      return resp.data;

    } catch (err) {
      this.showLoading = false;
      console.log(err);
    } finally {
      this.showLoading = false;
    }
  }

  addTodo() {
    this.mode = 'Create';
    this.rowDataSelected = null;
    this.indexSelected = null;
    this.previousStatus = null;
    this.displayDialogAddTodo = true;
  }

  confirmAdd(e: any) {
    const value = e.value;
    this.dataSourceTodo = [value, ...this.dataSourceTodo];
    this.displayDialogAddTodo = false;
  }

  onConfirmUpdate(e: any) {
    const value = e.value;
    const index = e.index;
    const previousStatus = e.previousStatus;
    const currentStatus = e.value.status;

    if (previousStatus === currentStatus) {
      const arrayData = `dataSource${previousStatus}` as any;
      const clone = [...this[arrayData]];

      clone[index] = value;
      this[arrayData] = clone;
    } else {
      const arrayDataPrev = `dataSource${previousStatus}` as any;
      const arrayDataCurr = `dataSource${currentStatus}` as any;

      let _clone = [...this[arrayDataPrev]];
      this[arrayDataPrev] = _clone.filter((item: any, i: number) => { return i !== index });
      this[arrayDataCurr] = [value, ...this[arrayDataCurr]];
    }

    this.displayDialogAddTodo = false;
  }

  onConfirmCancel(e: any) {
    this.displayDialogAddTodo = false;
  }

  onEdit(rowDataSelected: IInput, indexSelected: number) {
    this.mode = 'Edit';
    this.rowDataSelected = rowDataSelected;
    this.indexSelected = indexSelected || 0;
    this.previousStatus = rowDataSelected.status;
    this.displayDialogAddTodo = true;
  }

  sortTB(e: any, tableName: string) {
    const arrayData = `dataSource${tableName}` as any;
    const direction = e.direction;
    const active = e.active.toLowerCase();

    if (!direction) {
      return
    }

    this[arrayData] = _.orderBy(this[arrayData], [active], [direction]);
  }


  onDel(rowDataSelected: IInput, indexSelected: number, tableName: string) {
    this.tableSelected = `dataSource${tableName}` as any;
    this.rowDataSelected = rowDataSelected;
    this.indexSelected = indexSelected || 0;
    this.displayDialogDel = true;
  }


  onDelConfirm(e: any) {
    this.showLoading = true;
    const arrayData = e.tableSelected;
    const indexSelected = e.indexSelected;
    const tableSelected = e.tableSelected;

    let _clone = [...this[arrayData]];
    this[tableSelected] = _clone.filter((item: any, i: number) => { return i !== indexSelected });
    this.displayDialogDel = false;
    this.showLoading = false;
  }

  onDelCancel(e: any) {
    this.tableSelected = null;
    this.rowDataSelected = null;
    this.indexSelected = null;
    this.displayDialogDel = false;
  }

  async onSearch(form: FormGroup) {
    this.showLoading = true;

    const clone1 = await this.getDataToDoList();
    const clone2 = await this.getInProgressList();
    const clone3 = await this.getDoneList();

    // filter date range for Todo Table
    const filteredDatesRange1 = clone1.filter((item: any) => {
      let itemDate = dayjs(item.createDate).format('YYYY-MM-DD') as any;
      let startDate = dayjs(form.value.startDate).format('YYYY-MM-DD');
      let endDate = dayjs(form.value.endDate).format('YYYY-MM-DD');
      if (itemDate < startDate && itemDate > endDate || itemDate == startDate || itemDate == endDate) {
        return item
      }
    }
    );

    // filter date range for InProgress Table

    const filteredDatesRange2 = clone2.filter((item: any) => {
      let itemDate = dayjs(item.createDate).format('YYYY-MM-DD') as any;
      let startDate = dayjs(form.value.startDate).format('YYYY-MM-DD');
      let endDate = dayjs(form.value.endDate).format('YYYY-MM-DD');
      if (itemDate < startDate && itemDate > endDate || itemDate == startDate || itemDate == endDate) {
        return item
      }
    }
    );

    // filter date range for Done Table
    const filteredDatesRange3 = clone3.filter((item: any) => {
      let itemDate = dayjs(item.createDate).format('YYYY-MM-DD') as any;
      let startDate = dayjs(form.value.startDate).format('YYYY-MM-DD');
      let endDate = dayjs(form.value.endDate).format('YYYY-MM-DD');
      if (itemDate < startDate && itemDate > endDate || itemDate == startDate || itemDate == endDate) {
        return item
      }
    }
    );


    // filter by priority, category, status for Todo Table
    this.dataSourceTodo = filteredDatesRange1.filter((item: any) => {
      if (!form.value.priority && !form.value.category && !form.value.status) {
        return item
      }

      if (form.value.priority && !form.value.category && !form.value.status) {
        if (item.priority === form.value.priority) {
          return item
        }
      }

      if (!form.value.priority && form.value.category && !form.value.status) {
        if (item.category === form.value.category) {
          return item
        }
      }


      if (!form.value.priority && !form.value.category && form.value.status) {
        if (item.status === form.value.status) {
          return item
        }
      }

      if (!form.value.priority && form.value.category && form.value.status) {
        if (item.category === form.value.category && item.status === form.value.status) {
          return item
        }
      }

      if (form.value.priority && form.value.category && !form.value.status) {
        if (item.priority === form.value.priority && item.category === form.value.category) {
          return item
        }
      }

      if (form.value.priority && !form.value.category && form.value.status) {
        if (item.priority === form.value.priority && item.status === form.value.status) {
          return item
        }
      }

      if (form.value.priority && form.value.category && form.value.status) {
        if (item.priority === form.value.priority && item.category === form.value.category && item.status === form.value.status) {
          return item
        }
      }
    });

    // filter by priority, category, status for InProgress Table
    this.dataSourceInProgress = filteredDatesRange2.filter((item: any) => {
      if (!form.value.priority && !form.value.category && !form.value.status) {
        return item
      }

      if (form.value.priority && !form.value.category && !form.value.status) {
        if (item.priority === form.value.priority) {
          return item
        }
      }

      if (!form.value.priority && form.value.category && !form.value.status) {
        if (item.category === form.value.category) {
          return item
        }
      }


      if (!form.value.priority && !form.value.category && form.value.status) {
        if (item.status === form.value.status) {
          return item
        }
      }

      if (!form.value.priority && form.value.category && form.value.status) {
        if (item.category === form.value.category && item.status === form.value.status) {
          return item
        }
      }

      if (form.value.priority && form.value.category && !form.value.status) {
        if (item.priority === form.value.priority && item.category === form.value.category) {
          return item
        }
      }

      if (form.value.priority && !form.value.category && form.value.status) {
        if (item.priority === form.value.priority && item.status === form.value.status) {
          return item
        }
      }

      if (form.value.priority && form.value.category && form.value.status) {
        if (item.priority === form.value.priority && item.category === form.value.category && item.status === form.value.status) {
          return item
        }
      }
    });

    // filter by priority, category, status for Done Table
    this.dataSourceDone = filteredDatesRange3.filter((item: any) => {
      if (!form.value.priority && !form.value.category && !form.value.status) {
        return item
      }

      if (form.value.priority && !form.value.category && !form.value.status) {
        if (item.priority === form.value.priority) {
          return item
        }
      }

      if (!form.value.priority && form.value.category && !form.value.status) {
        if (item.category === form.value.category) {
          return item
        }
      }


      if (!form.value.priority && !form.value.category && form.value.status) {
        if (item.status === form.value.status) {
          return item
        }
      }

      if (!form.value.priority && form.value.category && form.value.status) {
        if (item.category === form.value.category && item.status === form.value.status) {
          return item
        }
      }

      if (form.value.priority && form.value.category && !form.value.status) {
        if (item.priority === form.value.priority && item.category === form.value.category) {
          return item
        }
      }

      if (form.value.priority && !form.value.category && form.value.status) {
        if (item.priority === form.value.priority && item.status === form.value.status) {
          return item
        }
      }

      if (form.value.priority && form.value.category && form.value.status) {
        if (item.priority === form.value.priority && item.category === form.value.category && item.status === form.value.status) {
          return item
        }
      }
    });

    setTimeout(() => {
      this.showLoading = false;
    }, 400);
  }

  async onClear() {
    this.showLoading = true;
    this.createForm();

    this.dataSourceTodo = await this.getDataToDoList();
    this.dataSourceInProgress = await this.getInProgressList();
    this.dataSourceDone = await this.getDoneList();

    setTimeout(() => {
      this.showLoading = false;
    }, 400);
  }

}
