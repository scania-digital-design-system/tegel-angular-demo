import { Routes } from '@angular/router';

const routes = [
  {
    path: '',
    loadComponent: () => import('@pages/components/components.component'),
  },
  {
    path: 'form',
    loadChildren: () => import('./form-routes'),
  },
  {
    path: 'web-components',
    loadComponent: () => import('@pages/components/components.component'),
  },
  {
    path: 'text',
    loadComponent: () => import('@pages/text-page/text-page.component'),
  },
  {
    path: 'tabs-buttons',
    loadComponent: () => import('@pages/tabs-buttons-page/tabs-buttons-page.component'),
  },
  {
    path: 'tabs-links',
    loadComponent: () => import('@pages/tabs-links-page/tabs-links-page.component'),
    children: [
      {
        path: 'folder-tabs',
        loadComponent: () => import('@pages/tabs-subpage/tabs-subpage.component'),
      },
      {
        path: 'inline-tabs',
        loadComponent: () => import('@pages/tabs-subpage/tabs-subpage.component'),
      },
      {
        path: 'navigation-tabs',
        loadComponent: () => import('@pages/tabs-subpage/tabs-subpage.component'),
      },
      { path: '', redirectTo: 'folder-tabs', pathMatch: 'full' },
    ],
  },
  {
    path: 'about',
    loadComponent: () => import('@pages/about-page/about-page.component'),
  },
  {
    path: 'stepper',
    loadComponent: () => import('@pages/stepper-page/stepper-page.component'),
  },
  {
    path: 'table',
    loadComponent: () => import('@pages/table-page/table-page.component'),
  },
  {
    path: 'settings',
    loadComponent: () => import('@pages/settings-page/settings-page.component'),
  },
  {
    path: 'notifications',
    loadComponent: () => import('@pages/notifications-page/notifications-page.component'),
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
