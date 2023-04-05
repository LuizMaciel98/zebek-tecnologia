import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
  {
    path: 'calculadora-porcentagem',
    loadComponent: () => import('./calculate-percentage/calculate-percentage.page').then( m => m.CalculatePercentagePage)
  },

];
