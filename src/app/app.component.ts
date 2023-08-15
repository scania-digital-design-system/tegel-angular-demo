import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { Router, RouterOutlet,RouterLink } from '@angular/router';
import { ModeSwitcherComponent } from './mode-switcher/mode-switcher.component';
import { ModeVariantSwitcherComponent } from './mode-variant-switcher/mode-variant-switcher.component';
import BreadcrumbsComponent from '@components/breadcrumbs/breadcrumbs.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [
        RouterLink,
        RouterOutlet,
        FooterComponent,
        BreadcrumbsComponent,
        ModeSwitcherComponent,
        ModeVariantSwitcherComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppComponent {
  constructor(private router: Router) {}

  title = 'Angular Demo';
  mobileNavOpen = false;
  mode: 'tds-mode-light' | 'tds-mode-dark' = 'tds-mode-light';
  modeVariant:'tds-mode-variant-primary' | 'tds-mode-variant-secondary' = 'tds-mode-variant-primary';

  isActive(url: string): boolean {
    return this.router.url === url;
  }

  toggleMobileSideMenu() {
    this.mobileNavOpen = !this.mobileNavOpen;
  }

  handleModeVariantToggle(){
    this.modeVariant = this.modeVariant === 'tds-mode-variant-primary' ? 'tds-mode-variant-secondary': 'tds-mode-variant-primary';
  }

  handleModeToggle(){
    this.mode = this.mode === 'tds-mode-light' ? 'tds-mode-dark': 'tds-mode-light';
  }
}
