import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentsComponent } from './pages/components/components.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Home aka start page
{
  path: 'form',
  loadComponent: () => import('./pages/form/form.component'),

},
  { path: 'components', component: ComponentsComponent },
  { path: 'page-two', component: PageTwoComponent },
  { path: '404', component: ErrorPageComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' }, // Wildcard route
];

export default routes;
