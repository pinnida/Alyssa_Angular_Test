import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'v-confirm-delete',
  templateUrl: './v-confirm-delete.component.html',
  styleUrls: ['./v-confirm-delete.component.scss']
})
export class VConfirmDeleteComponent {
  @Input() rowDataSelected: any | null;
  @Input() indexSelected!: any | null;
  @Input() tableSelected!: any | null;
  @Output() delConfirm: EventEmitter<any> = new EventEmitter();
  @Output() delCancel: EventEmitter<any> = new EventEmitter();

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

  ngOnInit(): void {
    this.createForm();

    if (this.rowDataSelected) {
      this.myForm.get('title')?.setValue(this.rowDataSelected.title);
      this.myForm.get('description')?.setValue(this.rowDataSelected.description);
      this.myForm.get('priority')?.setValue(this.rowDataSelected.priority);
      this.myForm.get('category')?.setValue(this.rowDataSelected.category);
      this.myForm.get('status')?.setValue(this.rowDataSelected.status);
      this.myForm.get('createDate')?.setValue(this.rowDataSelected.createDate);
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

  onSubmit(){
    this.delConfirm.emit({rowDataSelected: this.rowDataSelected, indexSelected: this.indexSelected, tableSelected: this.tableSelected})
  }

  onCancel(){
    this.delCancel.emit()
  }
}
