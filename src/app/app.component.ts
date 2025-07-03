import { Component, OnDestroy, OnInit } from '@angular/core';
import { FooterComponent } from '@components/footer/footer.component';
import { Router, RouterOutlet, RouterLink, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ModeSwitcherComponent } from './mode-switcher/mode-switcher.component';
import { ModeVariantSwitcherComponent } from './mode-variant-switcher/mode-variant-switcher.component';
import { BrandSwitcherComponent } from './brand-switcher/brand-switcher.component';
import BreadcrumbsComponent from './navigation/breadcrumbs/breadcrumbs.component';
import { BannerComponent } from '@components/banner/banner.component';
import { UserStoreService } from './services/user-store.service';
import { Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Notification } from 'src/types';
import { TegelModule } from '@scania/tegel-angular';

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
    CommonModule,
    TegelModule,
    BrandSwitcherComponent,
  ],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userStoreService: UserStoreService,
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let currentRoute = this.route.root;
        while (currentRoute.children[0] !== undefined) {
          currentRoute = currentRoute.children[0];
        }
        const routeUrl = currentRoute.snapshot.routeConfig?.path;

        if (routeUrl === '**') {
          this.is404page = true;
        } else {
          this.is404page = false;
        }
      }
    });
  }
  private onDestroy$: Subject<void> = new Subject<void>();

  title = 'Angular Demo';
  mobileNavOpen = false;
  brand: 'scania' | 'traton' = 'scania';
  mode: 'tds-mode-light' | 'tds-mode-dark' = 'tds-mode-light';
  modeVariant: 'tds-mode-variant-primary' | 'tds-mode-variant-secondary' =
    'tds-mode-variant-primary';
  userName = '';
  placeOfWork = '';
  notifications: Notification[];
  is404page: boolean = false;

  isActive(url: string): boolean {
    return this.router.url === url;
  }

  onSubRoute(url: string): boolean {
    return window.location.href.includes(url);
  }

  toggleMobileSideMenu() {
    this.mobileNavOpen = !this.mobileNavOpen;
  }

  handleModeVariantToggle() {
    this.modeVariant =
      this.modeVariant === 'tds-mode-variant-primary'
        ? 'tds-mode-variant-secondary'
        : 'tds-mode-variant-primary';
  }

  handleModeToggle() {
    this.mode = this.mode === 'tds-mode-light' ? 'tds-mode-dark' : 'tds-mode-light';
  }

  handleBrandToggle() {
    this.brand = this.brand === 'scania' ? 'traton' : 'scania';
    console.log('brand avtive is', this.brand);
  }

  ngOnInit() {
    this.userStoreService.userName$.pipe(takeUntil(this.onDestroy$)).subscribe((userName) => {
      this.userName = userName;
    });
    this.userStoreService.placeOfWork$.pipe(takeUntil(this.onDestroy$)).subscribe((placeOfWork) => {
      this.placeOfWork = placeOfWork;
    });
    this.userStoreService.notifications$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((notifications) => {
        this.notifications = notifications;
      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
