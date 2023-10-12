import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import * as dayjs from 'dayjs';
import { IInput } from '../fe-home/fe-home.component';

@Component({
  selector: 'v-task-work',
  templateUrl: './v-task-work.component.html',
  styleUrls: ['./v-task-work.component.scss']
})
export class VTaskWorkComponent {
  @Input() mode!: string;
  @Input() rowDataSelected!: IInput;
  @Input() indexSelected!: number;
  @Input() previousStatus!: string;

  @Output() confirmAdd: EventEmitter<any> = new EventEmitter();
  @Output() confirmUpdate: EventEmitter<any> = new EventEmitter();
  @Output() confirmCancel: EventEmitter<any> = new EventEmitter();

  nowDate = dayjs().format('YYYY-MM-DD');
  myForm!: FormGroup;

  PriorityOptions = [
    { text: 'High', value: 'High' },
    { text: 'Medium', value: 'Medium' },
    { text: 'Low', value: 'Low' },
  ];

  CategoryOptions = [
    { text: 'Work', value: 'Work', icon: 'bi bi-laptop' },
    { text: 'Personal', value: 'Personal', icon: 'bi bi-person' },
    { text: 'Study', value: 'Study', icon: 'bi bi-backpack' },
  ];

  StatusOptions = [
    { text: 'Todo', value: 'Todo' },
    { text: 'InProgress', value: 'InProgress' },
    { text: 'Done', value: 'Done' },
  ];


  constructor(
    private fb: NonNullableFormBuilder
  ) { }

  get title() {
    return this.myForm.get('title');
  }

  get description() {
    return this.myForm.get('description');
  }

  get priority() {
    return this.myForm.get('priority');
  }

  get category() {
    return this.myForm.get('category');
  }

  get status() {
    return this.myForm.get('status');
  }

  ngOnInit(): void {
    this.createForm();

    if (this.rowDataSelected) {
      this.myForm.get('title')?.setValue(this.rowDataSelected.title);
      this.myForm.get('description')?.setValue(this.rowDataSelected.description);
      this.myForm.get('priority')?.setValue(this.rowDataSelected.priority);
      this.myForm.get('category')?.setValue(this.rowDataSelected.category);
      this.myForm.get('status')?.setValue(this.rowDataSelected.status);
      this.myForm.get('createDate')?.setValue(this.rowDataSelected.createDate);
    } else {
      this.myForm.get('status')?.setValue('Todo');
    }
  }

  createForm() {
    this.myForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', Validators.required],
      priority: ['', Validators.required],
      category: ['', Validators.required],
      status: ['', Validators.required],
      createDate: [new Date(), Validators.required],
    });
  }


  onSubmit() {
    const { title, description, priority, category, status, createDate } = this.myForm.value;

    if (!this.myForm.valid || !title || !description || !priority || !category || !status || !createDate) {
      return;
    }

    if (this.rowDataSelected) {
      this.confirmUpdate.emit({ value: this.myForm.value, index: this.indexSelected, previousStatus: this.previousStatus })
    } else {
      this.confirmAdd.emit({ value: this.myForm.value })
    }

    // this.myForm.value.createDate = dayjs(this.myForm.value.createDate).format('YYYY-MM-DD');
  }

  onCancel() {
    this.confirmCancel.emit()
  }

}
