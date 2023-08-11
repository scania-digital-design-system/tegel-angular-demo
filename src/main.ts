import { defineCustomElements } from '@scania/tegel/loader';

import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import routes from '@routes/app-routing.module';

bootstrapApplication(AppComponent, {
    providers: [
      importProvidersFrom(
        RouterModule.forRoot(routes),
        BrowserModule
        )
    ]
})
  .catch((err) => console.error(err));

defineCustomElements(window);
