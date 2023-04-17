import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Home Page - Zebek Tecnologia',
            // description:'Como calcular porcentagem online, calculadora porcentagem online, passo a passo para calcular porcentagem',
            // ogUrl: 'https://wwww.zebek.dev/calculadora-porcentagem'
        },
        loadChildren: () => import('./pages/home/home.routes').then((m) => m.routes),
    },
    {
        path: 'home',
        data: {
            title: 'Home Page - Zebek Tecnologia',
        },
        loadChildren: () => import('./pages/home/home.routes').then((m) => m.routes),
    },
    {
        path: 'calculadora-porcentagem',
        data: {
            title: 'Calculadora de Porcentagem - Zebek Tecnologia'
            // description:'Como calcular porcentagem online, calculadora porcentagem online, passo a passo para calcular porcentagem',
            // ogUrl: 'https://wwww.zebek.dev/calculadora-porcentagem'
        },
        loadComponent: () => import('./pages/calculate-percentage/calculate-percentage.page').then( m => m.CalculatePercentagePage)
    },
    {
        path: 'sobre',
        data: {
            title: 'Sobre - Zebek Tecnologia',
        },
        loadComponent: () => import('./pages/about/about.page').then( m => m.AboutPage)
    },
    {
        path: 'ferramentas',
        data: {
            title: 'Ferramentas - Zebek Tecnologia',
        },
        loadComponent: () => import('./pages/tools/tools.page').then( m => m.ToolsPage)
    },
    {
        path: 'calculadora-regra-tres',
        data: {
            title: 'Calculadora de Regra de Tres - Zebek Tecnologia',
        },
        loadComponent: () => import('./pages/calculate-rule-of-three/calculate-rule-of-three.page').then( m => m.CalculateRuleOfThreePage)
    },
    {
        path: 'calculadora-juros-compostos',
        data: {
            title: 'Calculadora de Juros Compostos - Zebek Tecnologia',
        },
        loadComponent: () => import('./pages/calculate-compound-interest/calculate-compound-interest.page').then( m => m.CalculateCompoundInterestPage)
    },
    {
        path: 'calculadora-juros-compostos/resultado',
        data: {
            title: 'Calculadora de Juros Compostos - Resultado - Zebek Tecnologia',
        },
        loadComponent: () => import('./pages/result-compound-interest/result-compound-interest.page').then( m => m.ResultCompoundInterestPage)
    },
    // {
    //     path: 'post',
    //     loadComponent: () => import('./pages/post/post.page').then( m => m.PostPage)
    //     // loadChildren: () => import('./pages/post/post.routes').then((m) => m.routes),
    // },
    {
        path: 'blog/post/:id',
        loadComponent: () => import('./pages/post/post.page').then( m => m.PostPage)
        // loadChildren: () => import('./pages/post/post.routes').then((m) => m.routes),
    },
    {
        path: 'link-tree',
        data: {
            title: 'Link Tree - Zebek Tecnologia',
        },
        loadComponent: () => import('./pages/link-tree/link-tree.page').then( m => m.LinkTreePage)
    },
    {
        path: 'blog',
        data: {
            title: 'Blog - Zebek Tecnologia',
        },
        loadComponent: () => import('./pages/blog/blog.page').then( m => m.BlogPage)
    },
];
