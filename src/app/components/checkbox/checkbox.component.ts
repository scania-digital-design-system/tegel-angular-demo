import {  Component } from '@angular/core';
import { TegelModule } from '@scania/tegel-angular';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  standalone: true,
  imports: [TegelModule]
})
export class CheckboxComponent {}
