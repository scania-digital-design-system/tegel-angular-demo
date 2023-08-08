import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css'],
      imports: [
        RouterLink,
        RouterOutlet,
    ],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BreadcrumbsComponent {
    constructor(private router: Router) {}
    segments = this.router.url.split('/').filter(Boolean);;



}
