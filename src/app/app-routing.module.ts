import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentsComponent } from './pages/components/components.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { TextPageComponent } from './pages/text-page/text-page.component';
import { ChipsPageComponent } from './pages/chips-page/chips-page.component';
import { TabsButtonsPageComponent } from './pages/tabs-buttons-page/tabs-buttons-page.component';
import { TabsLinksPageComponent } from './pages/tabs-links-page/tabs-links-page.component';

const routes = [
  { path: '', component: HomeComponent }, // Home aka start page
{
  path: 'form',
  loadComponent: () => import('./pages/form/form.component'),

},
  { path: 'web-components', component: ComponentsComponent },
  { path: 'page-two', component: PageTwoComponent },
  { path: 'text', component: TextPageComponent },
  { path: 'chips', component: ChipsPageComponent },
  { path: 'tabs-buttons', component: TabsButtonsPageComponent },
  { path: 'tabs-links', component: TabsLinksPageComponent },
  { path: '404', component: ErrorPageComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' }, // Wildcard route
] satisfies Routes;

export default routes;
