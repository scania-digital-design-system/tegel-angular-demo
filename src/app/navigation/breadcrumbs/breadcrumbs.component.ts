import { CommonModule } from '@angular/common';
import {  Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { unslugify } from '../../../utils';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { TegelModule } from '@scania/tegel-angular';

@Component({
  selector: 'nav-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  imports: [RouterLink, RouterOutlet, CommonModule, TegelModule],
  standalone: true,
})
export default class BreadcrumbsNavComponent implements OnDestroy {
  segments: Array<{ title: string; path: string }> = []; // Initialize an empty array

  private navigationEndSubscription: Subscription | undefined;
  constructor(private router: Router) {
    this.navigationEndSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.url = event.url;
        this.segments = this.generateSegments(this.url); // Initialize segments array here
      });
  }

  ngOnDestroy() {
    if (this.navigationEndSubscription) {
      this.navigationEndSubscription.unsubscribe();
    }
  }

  generateSegments = (pathname: string): Array<{ title: string; path: string }> => {
    const segmentStrings = pathname.split('/').filter(Boolean);

    const segmentObjects: Array<{ title: string; path: string }> = segmentStrings.map(
      (segmentStr, idx) => ({
        title: unslugify(segmentStr),
        path: '/' + segmentStrings.slice(0, idx + 1).join('/'),
      }),
    );

    return [{ title: 'Home', path: '/' }].concat(segmentObjects);
  };

  url: string;
}
