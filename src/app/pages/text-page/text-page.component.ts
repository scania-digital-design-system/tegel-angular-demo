import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import BreadcrumbsComponent from '../../navigation/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-text-page',
  templateUrl: './text-page.component.html',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrls: ['./text-page.component.css'],
  imports: [BreadcrumbsComponent, RouterLink, RouterOutlet, CommonModule],
})
export default class TextPageComponent {
  constructor(private router: Router) {}

  tegelStorybook = 'https://tegel-storybook.netlify.app/';

  isTextRoute(): boolean {
    return this.router.url === '/text';
  }
}
