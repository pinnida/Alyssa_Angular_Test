import { NgModule } from '@angular/core';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { DragDropModule } from 'primeng/dragdrop';
import { PickListModule } from 'primeng/picklist';
import { StepsModule } from 'primeng/steps';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { AccordionModule } from 'primeng/accordion';
import { BadgeModule } from 'primeng/badge';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ChipModule } from 'primeng/chip';
import { KeyFilterModule } from 'primeng/keyfilter';
import { SkeletonModule } from 'primeng/skeleton';

import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { FileUploadModule } from 'primeng/fileupload';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PanelModule } from "primeng/panel";
import { RippleModule } from "primeng/ripple";
import { TooltipModule } from 'primeng/tooltip';


const primengModules = [
  AutoCompleteModule,
  TableModule,
  PaginatorModule,
  DragDropModule,
  PickListModule,
  StepsModule,
  InputTextModule,
  InputTextareaModule,
  InputNumberModule,
  InputMaskModule,
  CheckboxModule,
  RadioButtonModule,
  ButtonModule,
  CarouselModule,
  BreadcrumbModule,
  AccordionModule,
  BadgeModule,
  TimelineModule,
  CardModule,
  TagModule,
  ChipModule,
  KeyFilterModule,
  SkeletonModule,

  ToastModule,
  CalendarModule,
  SliderModule,
  MultiSelectModule,
  ContextMenuModule,
  DialogModule,
  ButtonModule,
  DropdownModule,
  ProgressBarModule,
  FileUploadModule,
  ToolbarModule,
  RatingModule,
  ConfirmDialogModule,
  PanelModule,
  RippleModule,
  TooltipModule,
];

@NgModule({
  declarations: [],
  imports: [primengModules],
  exports: [primengModules]
})
export class primengModule { }
