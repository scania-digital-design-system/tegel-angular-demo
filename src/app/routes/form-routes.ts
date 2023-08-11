import { Routes } from '@angular/router';

const formRoutes = [
  {
    path: '',
    loadComponent: () => import('@pages/form/form.component'),
    children: [
      { path: '', redirectTo: 'simpleform', pathMatch: 'full' },
      {
        path: 'simpleform',
        loadComponent: () => import('@pages/form/simple-form/simple-form.component'),
      },
      {
        path: 'reactive-forms',
        loadComponent: () => import('@pages/form/reactive-forms/reactive-forms.component'),
      },
    ],
  },
] satisfies Routes;

export default formRoutes;
