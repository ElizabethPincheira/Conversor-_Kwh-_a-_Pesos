import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./paginas/home/home.page').then((m) => m.HomePage),
  }, {
    path: 'config',
    loadComponent: () => import('./paginas/config/config.page').then( m => m.ConfigPage)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
 
];
