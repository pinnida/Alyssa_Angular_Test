import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

// services
import { AuthenticationService } from 'src/shared/services/authentication.service';
import { SwalService } from 'src/shared/services/swal.service';

// lodash
import * as _ from 'lodash';
export interface IInput {
  title: string;
  description: string;
  priority: string;
  category: string;
  status: string;
  createDate: Date;
  action: string;
}

const ELEMENT_DATA: IInput[] = [
  { title: 'AA', description: 'text', priority: 'High', category: 'Work', status: 'Todo', createDate: new Date(), action: '' },
  { title: 'BB', description: 'text', priority: 'Medium', category: 'Personal', status: 'Todo', createDate: new Date(), action: '' },
  { title: 'CC', description: 'text', priority: 'Low', category: 'Study', status: 'Todo', createDate: new Date(), action: '' },
  { title: 'DD', description: 'text', priority: 'Low', category: 'Work', status: 'Todo', createDate: new Date(), action: '' },
  { title: 'EE', description: 'text', priority: 'Low', category: 'Work', status: 'Todo', createDate: new Date(), action: '' },
];

const ELEMENT_DATA_2: IInput[] = [
  { title: 'AA', description: 'text', priority: 'High', category: 'Work', status: 'InProgress', createDate: new Date(), action: '' },
  { title: 'BB', description: 'text', priority: 'Medium', category: 'Personal', status: 'InProgress', createDate: new Date(), action: '' },
  { title: 'CC', description: 'text', priority: 'Low', category: 'Study', status: 'InProgress', createDate: new Date(), action: '' },
];

@Component({
  selector: 'fe-home',
  templateUrl: './fe-home.component.html',
  styleUrls: ['./fe-home.component.scss']
})
export class FeHomeComponent {
  [key: string]: any; // add this line to add an index signature
  displayDialogAddTodo: boolean = false;
  displayDialogDel: boolean = false;
  user$ = this.authenticationSVC.currentUser$;
  displayedColumns: string[] = ['title', 'description', 'priority', 'category', 'status', 'createDate', 'action'];

  dataSourceTodo = [...ELEMENT_DATA];
  dataSourceInProgress = [...ELEMENT_DATA_2];
  dataSourceDone = [] as any;

  mode: string = 'Create';
  indexSelected!: number | null;
  rowDataSelected!: IInput | null;
  previousStatus!: string | null;
  tableSelected!: any | null;

  columns = [
    { field: 'title', header: 'Title' },
    { field: 'description', header: 'Description' },
    { field: 'priority', header: 'Priority' },
    { field: 'category', header: 'Category' },
    { field: 'status', header: 'Status' },
    { field: 'createDate', header: 'CreateDate' },
    { field: 'action', header: 'Action' },

  ];
  constructor(
    private authenticationSVC: AuthenticationService,
    private swalSVC: SwalService,
  ) { }

  ngOnInit() {
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
    console.log('onConfirmUpdate',);
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
    const arrayData = e.tableSelected;
    const indexSelected = e.indexSelected;
    const tableSelected = e.tableSelected;

    let _clone = [...this[arrayData]];
    this[tableSelected] = _clone.filter((item: any, i: number) => { return i !== indexSelected });
    this.displayDialogDel = false;
  }

  onDelCancel(e: any) {
    this.tableSelected = null;
    this.rowDataSelected = null;
    this.indexSelected = null;
    this.displayDialogDel = false;
  }

}
