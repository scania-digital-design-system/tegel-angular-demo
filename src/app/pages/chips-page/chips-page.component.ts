import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import BreadcrumbsComponent from '@components/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-chips-page',
  templateUrl: './chips-page.component.html',
  styleUrls: ['./chips-page.component.css'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [BreadcrumbsComponent],
})
export default class ChipsPageComponent {

}
