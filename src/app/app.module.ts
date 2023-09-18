import { NgModule, importProvidersFrom } from '@angular/core';
import { AppComponent } from './app.component';
import {
  TegelModule,
} from '@scania/tegel-angular';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { BannerComponent } from '@components/banner/banner.component';
import { FooterComponent } from '@components/footer/footer.component';
import { ModeSwitcherComponent } from './mode-switcher/mode-switcher.component';
import { ModeVariantSwitcherComponent } from './mode-variant-switcher/mode-variant-switcher.component';
import { BrowserModule } from '@angular/platform-browser';
import routes from '@routes/app-routing.module';
import BreadcrumbsNavComponent from './navigation/breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterLink,
    RouterOutlet,
    FooterComponent,
    BannerComponent,
    BreadcrumbsNavComponent,
    ModeSwitcherComponent,
    ModeVariantSwitcherComponent,
    CommonModule,
    TegelModule,
    BrowserModule
  ],

  providers: [
    importProvidersFrom(
      RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'enabled'
      }),
      BrowserModule,
      TegelModule
      )
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}