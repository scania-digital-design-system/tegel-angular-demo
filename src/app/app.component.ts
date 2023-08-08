import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { Router, RouterOutlet,RouterLink } from '@angular/router';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [
        RouterLink,
        RouterOutlet,
        FooterComponent,
        BreadcrumbsComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppComponent {
  constructor(private router: Router) {}
  
  title = 'Angular Demo';
  mobileNavOpen = false;

  isActive(url: string): boolean {
    return this.router.url === url;
  }

  toggleMobileSideMenu() {
    this.mobileNavOpen = !this.mobileNavOpen;
  }
}
