import {  Component } from '@angular/core';
import { TegelModule } from '@scania/tegel-angular';

@Component({
  selector: 'app-divider',
  standalone: true,
  templateUrl: './divider.component.html',
  imports: [TegelModule]
})
export class DividerComponent {}
