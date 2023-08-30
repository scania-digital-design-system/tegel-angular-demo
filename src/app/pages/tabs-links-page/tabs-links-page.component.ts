import { CommonModule, Location } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import BreadcrumbsComponent from 'src/app/components/breadcrumbs/breadcrumbs.component';
import { untilDestroyedRef } from 'src/utils';

@Component({
  selector: 'app-tabs-links-page',
  templateUrl: './tabs-links-page.component.html',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [BreadcrumbsComponent, RouterLink, RouterOutlet, CommonModule],
})
export default class TabsLinksPageComponent {
  fullPath: string;
  private untilDestroyed = untilDestroyedRef();

  constructor(private router: Router, private location: Location) {
    this.router.events.pipe(this.untilDestroyed()).subscribe(() => {
      this.fullPath = this.location.path(); // gives you the relative URL
    });
  }
  getSelectedIndex() {
    return 0;
  }
}
