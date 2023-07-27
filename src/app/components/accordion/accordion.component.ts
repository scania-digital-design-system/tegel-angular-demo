import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-accordion',
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.css'],
    standalone: true,
    imports: [RouterLink],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AccordionComponent {
  /* Here are two examples how to check current url to make "selected" prop of <tds-header-item> to work.
   * Please check html file for more info */

  constructor(private router: Router) {}
  isActive(url: string): boolean {
    return this.router.isActive(url, true);
  }

  getCurrentUrl(): string {
    return this.router.url;
  }
}
