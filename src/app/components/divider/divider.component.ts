import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'app-divider',
  standalone: true,
  templateUrl: './divider.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DividerComponent {}
