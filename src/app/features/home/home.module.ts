import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// component
import { FeHomeComponent } from './fe-home/fe-home.component';

const features = [
  FeHomeComponent,
];


@NgModule({
  declarations: [
    [...features],
  ],
  imports: [
    CommonModule
  ], exports: [
    [...features],
  ],
})
export class HomeModule { }
