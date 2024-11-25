import {  Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TegelModule } from '@scania/tegel-angular';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  standalone: true,
  imports: [TegelModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ButtonComponent {}
