import { Component } from '@angular/core';
import { TegelModule } from '@scania/tegel-angular';

@Component({
  selector: 'app-tanstack-table',
  standalone: true,
  templateUrl: './tanstack-table.component.html',
  imports: [TegelModule],
})
export default class TanstackTableComponent {}
