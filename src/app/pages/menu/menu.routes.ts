import { Routes } from '@angular/router';
import { MenuPage } from './menu.page';

export const routes: Routes = [
    {
        path: '',
        component: MenuPage,
        children: [
            {
                path: 'home',
                loadComponent: () => import('../home/home.page').then((m) => m.HomePage),
            },
            {
                path: 'about',
                loadComponent: () => import('../about/about.page').then((m) => m.AboutPage),
            }
        ]
    },
];