import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { BreadcrumbsComponent } from 'src/app/components/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-tabs-links-page',
  templateUrl: './tabs-links-page.component.html',
  styleUrls: ['./tabs-links-page.component.css'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [BreadcrumbsComponent],
})
export class TabsLinksPageComponent {

}
