import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// components
import { FeAuthComponent } from './fe-auth/fe-auth.component';


const features = [
  FeAuthComponent
];

@NgModule({
  declarations: [
    ...features
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ...features
   ]
})
export class AuthModule { }
