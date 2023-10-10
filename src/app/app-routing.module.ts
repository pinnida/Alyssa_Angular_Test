import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { LayoutAuthComponent } from './layouts/layout-auth/layout-auth.component';
import { LayoutMainComponent } from './layouts/layout-main/layout-main.component';

const routes: Routes = [
  {
    path: 'auth',
    component: LayoutAuthComponent,
    loadChildren: () => import('./pages/auth-page/auth-page.module').then(m => m.AuthPageModule)
  },
  {
    path: '',
    component: LayoutMainComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule)
        // canLoad
      },
      {
        path: 'file-import',
        loadChildren: () => import('./pages/file-import-page/file-import-page.module').then(m => m.FileImportPageModule)
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
