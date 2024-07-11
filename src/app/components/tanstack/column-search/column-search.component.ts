import { Component } from '@angular/core';
import { TegelModule } from '@scania/tegel-angular';
@Component({
  selector: 'app-column-search',
  templateUrl: './column-search.component.html',
  standalone: true,
  imports: [TegelModule],
})
export class ColumnSearchComponent {}
