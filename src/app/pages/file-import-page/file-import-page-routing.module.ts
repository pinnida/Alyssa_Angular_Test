import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { FileImportPageComponent } from './file-import-page/file-import-page.component';

const routes: Routes = [
  { path: '', component: FileImportPageComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileImportPageRoutingModule { }
