import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';
import { HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent }, // Home aka start page
  { path: 'page-one', component: PageOneComponent },
  { path: 'page-two', component: PageTwoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Wildcard route
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
