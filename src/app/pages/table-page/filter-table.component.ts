import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import exampleData from './exampleData.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter-table',
  template: `
    <h1>Search Table</h1>
    <tds-table
      vertical-dividers="false"
      compact-design="false"
      responsive="false"
    >
      <tds-table-toolbar
        table-title="Filter"
        filter
        (tdsFilter)="handleFilter($event)"
      ></tds-table-toolbar>
      <tds-table-header>
        <tds-header-cell
          cell-key="truck"
          cell-value="Truck type"
        ></tds-header-cell>
        <tds-header-cell
          cell-key="driver"
          cell-value="Driver name"
        ></tds-header-cell>
        <tds-header-cell
          cell-key="country"
          cell-value="Country"
        ></tds-header-cell>
        <tds-header-cell
          cell-key="mileage"
          cell-value="Mileage"
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
export class FilterTableComponent {
  tableData = exampleData;

  handleFilter(event: any) {
    const { query } = event.detail;
    this.tableData = exampleData.filter((object) =>
      Object.values(object).some((value) =>
        value.toString().toLowerCase().includes(query.toLowerCase()),
      ),
    );
  }
}
