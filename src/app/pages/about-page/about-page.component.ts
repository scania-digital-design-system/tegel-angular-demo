import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  standalone: true,
  templateUrl: './about-page.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export default class AboutPageComponent {}
