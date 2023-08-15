import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tabs-subpage',
  standalone: true,
  templateUrl: './tabs-subpage.component.html',
  styleUrls: ['./tabs-subpage.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export default class TabsSubpageComponent {
  currentRoute: string;

  constructor(private route: ActivatedRoute) {
    this.route.url.subscribe((segments) => {
      this.currentRoute = segments.join('/');
    });
  }
}
