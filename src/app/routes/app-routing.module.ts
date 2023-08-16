import { Routes } from '@angular/router';

const routes = [
  {
    path: '',
    loadComponent: () => import('@pages/home/home.component'),
  }, // Home aka start page
  {
    path: 'form',
    loadChildren: () => import('./form-routes'),
  },
  {
    path: 'web-components',
    loadComponent: () => import('@pages/components/components.component'),
  },
  {
    path: 'page-two',
    loadComponent: () => import('@pages/page-two/page-two.component'),
  },
  {
    path: 'text',
    loadComponent: () => import('@pages/text-page/text-page.component'),
  },
  {
    path: 'chips',
    loadComponent: () => import('@pages/chips-page/chips-page.component'),
  },
  {
    path: 'tabs-buttons',
    loadComponent: () => import('@pages/tabs-buttons-page/tabs-buttons-page.component'),
  },
  {
    path: 'tabs-links',
    loadComponent: () => import('@pages/tabs-links-page/tabs-links-page.component'),
  },
  {
    path: 'table',
    loadComponent: () => import('@pages/table-page/table-page.component'),
  },
  {
    path: '404',
    loadComponent: () => import('@pages/error-page/error-page.component'),
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  }, // Wildcard route
] satisfies Routes;

export default routes;
