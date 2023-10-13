import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';

// data
import { CategoryOptions, PriorityOptions, StatusOptions } from 'src/assets/data/dropdown.data';

// model interface
import { IInput } from 'src/assets/data/interface.model';

@Component({
  selector: 'v-confirm-delete',
  templateUrl: './v-confirm-delete.component.html',
  styleUrls: ['./v-confirm-delete.component.scss']
})
export class VConfirmDeleteComponent {
  @Input() rowDataSelected!: IInput | null;
  @Input() indexSelected!: number | null;
  @Input() tableSelected!: string | null;
  @Output() delConfirm: EventEmitter<any> = new EventEmitter();
  @Output() delCancel: EventEmitter<any> = new EventEmitter();

  myForm!: FormGroup;

  DDL = {
    PriorityOptions: PriorityOptions as Array<any>,
    CategoryOptions: CategoryOptions as Array<any>,
    StatusOptions: StatusOptions as Array<any>,
  };

  constructor(
    private fb: NonNullableFormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();

    // Dropdowns
    this.DDL.PriorityOptions = PriorityOptions;
    this.DDL.CategoryOptions = CategoryOptions;
    this.DDL.StatusOptions = StatusOptions;

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

  onSubmit() {
    this.delConfirm.emit({ rowDataSelected: this.rowDataSelected, indexSelected: this.indexSelected, tableSelected: this.tableSelected })
  }

  onCancel() {
    this.delCancel.emit()
  }
}
