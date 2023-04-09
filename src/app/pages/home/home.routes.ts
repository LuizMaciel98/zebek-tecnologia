import { Routes } from '@angular/router';
import { HomePage } from './home.page';

export const routes: Routes = [
    {
        path: 'home',
        component: HomePage,
        children: [
            {
                path: 'home',
                redirectTo: '/home',
                pathMatch: 'full',
            }
        ]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
];