import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component, Input
} from '@angular/core'
import {TableData} from './table-data'
import {KeyValuePipe, NgForOf, NgIf} from '@angular/common'

@Component({
  selector: 'app-expandable-table',
  template: `
    <h1>Expandable Table</h1>
    <tds-table expandable-rows vertical-dividers="false" compact-design="false" responsive="false">
      <tds-table-header>
        <tds-header-cell column-key="truck" column-title="Truck type"></tds-header-cell>
        <tds-header-cell column-key="driver" column-title="Driver name"></tds-header-cell>
        <tds-header-cell column-key="country" column-title="Country"></tds-header-cell>
        <tds-header-cell column-key="mileage" column-title="Mileage" text-align="right"></tds-header-cell>
      </tds-table-header>
      <tds-table-body>
        <tds-table-body-row-expandable *ngFor="let item of tableData">
          <tds-body-cell cell-key="truck">{{item.truck}}</tds-body-cell>
          <tds-body-cell cell-key="driver">{{item.driver}}</tds-body-cell>
          <tds-body-cell cell-key="country">{{item.country}}</tds-body-cell>
          <tds-body-cell cell-key="mileage">{{item.mileage}}</tds-body-cell>
          <div slot="expand-row">
            {{item.expandableData}}
          </div>
        </tds-table-body-row-expandable>
      </tds-table-body>
    </tds-table>
  `,
  styles: [``],
  standalone: true,
  imports: [
    NgForOf,
    KeyValuePipe,
    NgIf,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExpandableTableComponent {
  @Input() tableData: TableData[]
}

