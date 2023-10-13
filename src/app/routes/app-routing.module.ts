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
    path: 'text/text-subpage-with-long-name',
    loadComponent: () => import('@pages/text-subpage/text-subpage.component'),
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
        path: 'first-tab',
        loadComponent: () => import('@pages/tabs-links-page/tabs-subpage/tabs-subpage.component'),
      },
      {
        path: 'second-tab',
        loadComponent: () => import('@pages/tabs-links-page/tabs-subpage/tabs-subpage.component'),
      },
      {
        path: 'third-tab',
        loadComponent: () => import('@pages/tabs-links-page/tabs-subpage/tabs-subpage.component'),
      },
      { path: '', redirectTo: 'first-tab', pathMatch: 'full' },
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
    path: '**',
    loadComponent: () => import('@pages/error-page/error-page.component'),
    pathMatch: 'full',
  }, // Wildcard route
] satisfies Routes;

export default routes;
