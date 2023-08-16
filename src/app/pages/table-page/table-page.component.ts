import {
  CUSTOM_ELEMENTS_SCHEMA,
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

@Component({
  selector: 'app-table-page',
  template: `
    <app-basic-table [tableData]="(tableService.getTruckData() | async) ?? []"></app-basic-table>
    <app-batch-actions-table [tableData]="(tableService.getTruckData() | async) ?? []"></app-batch-actions-table>
    <app-sortable-table [tableData]="(tableService.getTruckData() | async) ?? []"></app-sortable-table>
    <app-filter-table [tableData]="(tableService.getTruckData() | async) ?? []"></app-filter-table>
    <app-pagination-table [tableData]="(tableService.getTruckData() | async) ?? []"></app-pagination-table>
    <app-expandable-table [tableData]="(tableService.getExpandableData() | async) ?? []"></app-expandable-table>
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
    AsyncPipe
  ],
  providers: [TableService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export default class TablePageComponent {
  tableService = inject(TableService)
}
