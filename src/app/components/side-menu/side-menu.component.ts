import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TegelModule } from '@scania/tegel-angular';

import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { UserStoreService } from '../../services/user-store.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
  imports: [CommonModule, TegelModule],
})
export default class SideMenuComponent {
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

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
