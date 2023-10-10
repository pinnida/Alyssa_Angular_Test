import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing.module
import { FileImportPageRoutingModule } from './file-import-page-routing.module';

// components
import { FileImportPageComponent } from './file-import-page/file-import-page.component';

// modules
import { FileImportModule } from 'src/app/features/file-import/file-import.module';


@NgModule({
  declarations: [
    FileImportPageComponent
  ],
  imports: [
    CommonModule,
    FileImportPageRoutingModule,
    FileImportModule
  ]
})
export class FileImportPageModule { }
