import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { Router, RouterOutlet,RouterLink } from '@angular/router';
import { ModeSwitcherComponent } from './mode-switcher/mode-switcher.component';
import { ModeVariantSwitcherComponent } from './mode-variant-switcher/mode-variant-switcher.component';
import BreadcrumbsComponent from '@components/breadcrumbs/breadcrumbs.component';
import { BannerComponent } from '@components/banner/banner.component';
import { UserStoreService } from './services/user-store.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [
        RouterLink,
        RouterOutlet,
        FooterComponent,
        BannerComponent,
        BreadcrumbsComponent,
        ModeSwitcherComponent,
        ModeVariantSwitcherComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppComponent implements OnInit {
  constructor(private router: Router,private userStoreService: UserStoreService) {}
  
  
  title = 'Angular Demo';
  mobileNavOpen = false;
  mode: 'tds-mode-light' | 'tds-mode-dark' = 'tds-mode-light';
  modeVariant:'tds-mode-variant-primary' | 'tds-mode-variant-secondary' = 'tds-mode-variant-primary';
  userName = '';
  placeOfWork = '';
  notifications: {}[] = [];


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

  ngOnInit() {
    this.userStoreService.userName$.subscribe((userName) => {
      this.userName = userName;
    });

    this.userStoreService.placeOfWork$.subscribe((placeOfWork) => {
      this.placeOfWork = placeOfWork;
    });

    this.userStoreService.notifications$.subscribe((notifications) => {
      this.notifications = notifications;
    });
  }
}
