import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.routes').then((m) => m.routes),
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.routes').then((m) => m.routes),
  },
  {
    path: 'calculadora-porcentagem',
    loadComponent: () => import('./pages/calculate-percentage/calculate-percentage.page').then( m => m.CalculatePercentagePage)
  },
  //   {
  //     path: '',
  //     loadChildren: () => import('./pages/menu/menu.routes').then((m) => m.routes),
  //     // loadChildren: () => import('./pages/menu/menu.routing.module').then(m => m.MenuPageRoutingModule),
  // // loadComponent: () => import('./pages/menu/menu.page').then( m => m.MenuPage)
  //   },
  // {
  //   path: 'about',
  //   loadComponent: () => import('./pages/about/about.page').then( m => m.AboutPage)
  // },

];
