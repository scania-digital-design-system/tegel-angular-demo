import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
} from '@angular/core'
import {BasicTableComponent} from './basic-table.component'
import {BatchActionsTableComponent} from './batch-actions-table.component'
import {SortableTableComponent} from './sortable-table.component'
@Component({
  selector: 'app-table-page',
  template: `
    <app-basic-table [tableData]="data"></app-basic-table>
    <app-batch-actions-table [tableData]="data"></app-batch-actions-table>
    <app-sortable-table [tableData]="data"></app-sortable-table>
  `,
  styles: [``],
  standalone: true,
  imports: [
    BasicTableComponent,
    BatchActionsTableComponent,
    SortableTableComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TablePageComponent {
  data = [
    {"truck":"L-series","driver":"Sonya Bruce","country":"Argentina","mileage":253987},
    {"truck":"P-series","driver":"Guerra Bowman","country":"Finland","mileage":885252},
    {"truck":"G-series","driver":"Ferrell Wallace","country":"Austria","mileage":7856},
    {"truck":"R-series","driver":"Cox Burris","country":"Italy","mileage":456654},
    {"truck":"S-series","driver":"Montgomery Cervantes","country":"Poland","mileage":65650},
    {"truck":"L-series","driver":"Sheryl Nielsen","country":"Bulgaria","mileage":85225},
    {"truck":"G-series","driver":"Benton Gomez","country":"Slovakia","mileage":80957}
  ]
}
