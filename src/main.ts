import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import routes from '@routes/app-routing.module';
import { TegelModule } from '@scania/tegel-angular';

// Import Stencil.js custom elements loader
import { defineCustomElements } from '@scania/tegel/loader';

defineCustomElements(window, {
  transformTagName: (tagName: string) => `custom-${tagName}`,
} as any); // Cast to `any` to bypass TypeScript checks

bootstrapApplication(AppComponent, {
    providers: [
      importProvidersFrom(
        RouterModule.forRoot(routes, {
          scrollPositionRestoration: 'enabled'
        }),
        BrowserModule,
        TegelModule
        )
    ]
})
  .catch((err) => console.error(err));