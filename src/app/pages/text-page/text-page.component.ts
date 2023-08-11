import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import  BreadcrumbsComponent  from 'src/app/components/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-text-page',
  templateUrl: './text-page.component.html',
  styleUrls: ['./text-page.component.css'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [BreadcrumbsComponent],
})
export default class TextPageComponent {

}
