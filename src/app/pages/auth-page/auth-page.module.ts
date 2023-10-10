import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing.module
import { AuthPageRoutingModule } from './auth-page-routing.module';

// components
import { LoginPageComponent } from './login-page/login-page.component';

// modules
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { AuthModule } from 'src/app/features/auth/auth.module';


@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    AuthPageRoutingModule,
    LayoutsModule,
    AuthModule
  ]
})
export class AuthPageModule { }
