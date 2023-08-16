import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { untilDestroyedRef } from 'src/utils';

@Component({
  selector: 'app-tabs-subpage',
  standalone: true,
  templateUrl: './tabs-subpage.component.html',
  styleUrls: ['./tabs-subpage.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export default class TabsSubpageComponent {
  currentRoute: string;
  private untilDestroyed = untilDestroyedRef();

  constructor(private route: ActivatedRoute) {
    this.route.url.pipe(this.untilDestroyed()).subscribe((segments) => {
      this.currentRoute = segments.join('/');
    });
  }
}
