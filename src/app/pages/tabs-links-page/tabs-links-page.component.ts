import { CommonModule, Location } from '@angular/common';
import {  Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import BreadcrumbsComponent from '../../navigation/breadcrumbs/breadcrumbs.component';
import { untilDestroyedRef } from 'src/utils';
import { TegelModule } from '@scania/tegel-angular';
import TabsSubpageComponent from '@pages/tabs-links-page/tabs-subpage/tabs-subpage.component';

@Component({
  selector: 'app-tabs-links-page',
  templateUrl: './tabs-links-page.component.html',
  standalone: true,
  imports: [BreadcrumbsComponent, RouterLink, RouterOutlet, CommonModule, TegelModule, TabsSubpageComponent],
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
