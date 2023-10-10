import {
  
  Component, inject,
} from '@angular/core'
import {BasicTableComponent} from './basic-table.component'
import {BatchActionsTableComponent} from './batch-actions-table.component'
import {SortableTableComponent} from './sortable-table.component'
import {FilterTableComponent} from './filter-table.component'
import {PaginationTableComponent} from './pagination-table.component'
import {ExpandableTableComponent} from './expandable-table.component'
import {TableService} from './table.service'
import {AsyncPipe} from '@angular/common'
import { TegelModule } from '@scania/tegel-angular'

@Component({
  selector: 'app-table-page',
  template: `
    <app-basic-table></app-basic-table>
    <app-batch-actions-table></app-batch-actions-table>
    <app-sortable-table></app-sortable-table>
    <app-filter-table></app-filter-table>
    <app-pagination-table></app-pagination-table>
    <app-expandable-table></app-expandable-table>
  `,
  styles: [``],
  standalone: true,
  imports: [
    BasicTableComponent,
    BatchActionsTableComponent,
    SortableTableComponent,
    FilterTableComponent,
    PaginationTableComponent,
    ExpandableTableComponent,
    AsyncPipe,
    TegelModule
  ],
  providers: [TableService],
})
export default class TablePageComponent {
  tableService = inject(TableService)
}
