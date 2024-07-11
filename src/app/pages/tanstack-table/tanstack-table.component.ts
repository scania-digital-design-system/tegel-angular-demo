import { Component } from '@angular/core';
import { TegelModule } from '@scania/tegel-angular';
import { ColumnSearchComponent } from '@components/tanstack/column-search/column-search.component';

@Component({
  selector: 'app-tanstack-table',
  standalone: true,
  templateUrl: './tanstack-table.component.html',
  imports: [TegelModule, ColumnSearchComponent],
})
export default class TanstackTableComponent {}
