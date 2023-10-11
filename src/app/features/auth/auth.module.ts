import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// components
import { FeAuthComponent } from './fe-auth/fe-auth.component';
import { SharedModule } from 'src/shared/shared.module';


const features = [
  FeAuthComponent
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
   ]
})
export class AuthModule { }
