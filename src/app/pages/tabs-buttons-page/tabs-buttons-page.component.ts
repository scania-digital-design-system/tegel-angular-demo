import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { BreadcrumbsComponent } from 'src/app/components/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-tabs-buttons-page',
  templateUrl: './tabs-buttons-page.component.html',
  styleUrls: ['./tabs-buttons-page.component.css'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [BreadcrumbsComponent],
})
export class TabsButtonsPageComponent {

}
