import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutMainComponent } from './layout-main/layout-main.component';
import { LayoutAuthComponent } from './layout-auth/layout-auth.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { NavListItemComponent } from './nav-list-item/nav-list-item.component';
import { NavSubListComponent } from './nav-sub-list/nav-sub-list.component';
import { HeaderComponent } from './header/header.component';

import { SharedModule } from 'src/shared/shared.module';

const components = [
  LayoutAuthComponent,
  LayoutMainComponent,
  SideNavBarComponent,
  NavListItemComponent,
  NavSubListComponent,
  HeaderComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  exports: []
})
export class LayoutsModule { }
