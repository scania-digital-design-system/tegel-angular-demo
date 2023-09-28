import { CommonModule, Location } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import BreadcrumbsComponent from '../../navigation/breadcrumbs/breadcrumbs.component';
import { untilDestroyedRef } from 'src/utils';
import TabsSubpageComponent from '@pages/tabs-subpage/tabs-subpage.component';

@Component({
  selector: 'app-tabs-links-page',
  templateUrl: './tabs-links-page.component.html',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [BreadcrumbsComponent, RouterLink, RouterOutlet, CommonModule, TabsSubpageComponent],
})
export default class TabsLinksPageComponent {
  fullPath: string;
  currentPathIndex: number;
  private untilDestroyed = untilDestroyedRef();

  constructor(private router: Router, private location: Location) {
    this.router.events.pipe(this.untilDestroyed()).subscribe(() => {
      this.fullPath = this.location.path(); // gives you the relative URL
      this.currentPathIndex = ['first-tab', 'second-tab', 'third-tab'].findIndex((pathSegment) =>
        this.fullPath.includes(pathSegment),
      );
      
    });
  }
}
