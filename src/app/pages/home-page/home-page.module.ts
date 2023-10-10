import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing.module
import { HomePageRoutingModule } from './home-page-routing.module';

// components
import { HomePageComponent } from './home-page/home-page.component';

// modules
import { HomeModule } from 'src/app/features/home/home.module';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    HomeModule
  ]
})
export class HomePageModule { }
