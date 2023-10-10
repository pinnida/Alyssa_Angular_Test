import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { SharedModule } from 'src/shared/shared.module';

// component
import { FeFileImportComponent } from './fe-file-import/fe-file-import.component';


const features = [
  FeFileImportComponent,
];


@NgModule({
  declarations: [
    [...features],
  ],
  imports: [
    CommonModule,
    SharedModule
  ], exports: [
    [...features],
  ],
})
export class FileImportModule { }
