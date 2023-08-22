import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import exampleData from './exampleData.json';

@Component({
  selector: 'app-sortable-table',
  template: `
    <h1>Sortable Table</h1>
    <tds-table
      vertical-dividers="false"
      compact-design="false"
      responsive="false"
      (tdsSort)="sort($event)"
    >
      <tds-table-toolbar table-title="Sorting"></tds-table-toolbar>
      <tds-table-header>
        <tds-header-cell
          cell-key="truck"
          cell-value="Truck type"
          sortable="true"
        ></tds-header-cell>
        <tds-header-cell
          cell-key="driver"
          cell-value="Driver name"
          sortable="true"
        ></tds-header-cell>
        <tds-header-cell
          cell-key="country"
          cell-value="Country"
          sortable="true"
        ></tds-header-cell>
        <tds-header-cell
          cell-key="mileage"
          cell-value="Mileage"
          sortable="true"
        ></tds-header-cell>
      </tds-table-header>
      <tds-table-body>
        <tds-table-body-row *ngFor="let row of tableData">
          <tds-body-cell cell-key="truck">
            {{ row.truck }}
          </tds-body-cell>
          <tds-body-cell cell-key="driver">
            {{ row.driver }}
          </tds-body-cell>
          <tds-body-cell cell-key="country">
            {{ row.country }}
          </tds-body-cell>
          <tds-body-cell cell-key="mileage">
            {{ row.mileage }}
          </tds-body-cell>
        </tds-table-body-row>
      </tds-table-body>
    </tds-table>
  `,
  styles: [``],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule],
})
export class SortableTableComponent {
  tableData = exampleData;

  sort(event: any) {
    const key = event.detail.columnKey as keyof (typeof exampleData)[0];
    const direction = event.detail.sortingDirection;

    let comparison = 0;
    const updatedData = exampleData.slice().sort((a, b) => {
      if (a[key] < b[key]) {
        comparison = -1;
      }
      if (a[key] > b[key]) {
        comparison = 1;
      }
      return direction === 'desc' ? comparison * -1 : comparison;
    });
    this.tableData = updatedData;
  }
}
