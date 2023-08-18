import { CUSTOM_ELEMENTS_SCHEMA, Component, OnDestroy, OnInit } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { Router, RouterOutlet,RouterLink } from '@angular/router';
import { ModeSwitcherComponent } from './mode-switcher/mode-switcher.component';
import { ModeVariantSwitcherComponent } from './mode-variant-switcher/mode-variant-switcher.component';
import BreadcrumbsComponent from '@components/breadcrumbs/breadcrumbs.component';
import { BannerComponent } from '@components/banner/banner.component';
import { UserStoreService } from './services/user-store.service';
import { Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Notification } from 'src/types';

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
        ModeVariantSwitcherComponent,
        CommonModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private router: Router,private userStoreService: UserStoreService) {}
  private onDestroy$: Subject<void> = new Subject<void>();

  
  title = 'Angular Demo';
  mobileNavOpen = false;
  mode: 'tds-mode-light' | 'tds-mode-dark' = 'tds-mode-light';
  modeVariant:'tds-mode-variant-primary' | 'tds-mode-variant-secondary' = 'tds-mode-variant-primary';
  userName = '';
  placeOfWork = '';
  notifications: Notification[];


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
    this.userStoreService.userName$.pipe(takeUntil(this.onDestroy$)).subscribe((userName) => {
      this.userName = userName;
    });
    this.userStoreService.placeOfWork$.pipe(takeUntil(this.onDestroy$)).subscribe((placeOfWork) => {
      this.placeOfWork = placeOfWork;
    });
    this.userStoreService.notifications$.pipe(takeUntil(this.onDestroy$)).subscribe((notifications) => {
      this.notifications = notifications;
    });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  
}
