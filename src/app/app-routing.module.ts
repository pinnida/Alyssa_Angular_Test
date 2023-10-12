import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';

// components
import { LayoutAuthComponent } from './layouts/layout-auth/layout-auth.component';
import { LayoutMainComponent } from './layouts/layout-main/layout-main.component';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/auth/login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['dashboard']);

const routes: Routes = [
  {
    path: 'auth',
    component: LayoutAuthComponent,
    loadChildren: () => import('./pages/auth-page/auth-page.module').then(m => m.AuthPageModule),
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: '',
    component: LayoutMainComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule),
        ...canActivate(redirectUnauthorizedToLogin),
      },
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/auth/login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
