import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// modules
import { SharedModule } from 'src/shared/shared.module';

// component
import { FeHomeComponent } from './fe-home/fe-home.component';
import { VTaskWorkComponent } from './v-task-work/v-task-work.component';

const features = [
  FeHomeComponent,
  VTaskWorkComponent
];


@NgModule({
  declarations: [
    ...features
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    ...features
  ],
})
export class HomeModule { }
