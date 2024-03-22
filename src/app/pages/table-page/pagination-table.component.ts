import { Component } from '@angular/core';
import exampleData from './exampleData.json';
import { CommonModule } from '@angular/common';
import { TegelModule } from '@scania/tegel-angular';

@Component({
  selector: 'app-pagination-table',
  template: `
    <div class="tds-headline-02 tds-u-pb1 tds-u-pt3">Pagination Table</div>
    <p>This Table uses pagination.</p>
    <tds-table
      vertical-dividers="false"
      compact-design="false"
      responsive
      no-min-width
    >
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
          text-align="right"
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
          <tds-body-cell
            text-align="right"
            cell-key="mileage"
          >
            {{ row.mileage }}
          </tds-body-cell>
        </tds-table-body-row>
      </tds-table-body>
      <tds-table-footer
        pagination
        [pages]="pages"
        (tdsPagination)="handlePagination($event)"
      ></tds-table-footer>
    </tds-table>
  `,
  styles: [``],
  standalone: true,
  imports: [CommonModule, TegelModule],
})
export class PaginationTableComponent {
  rowsPerPage = 2;
  page = 0;
  pages = Math.ceil(exampleData.length / this.rowsPerPage);
  tableData = exampleData.slice(this.page, this.page + this.rowsPerPage);

  handlePagination(event: any) {
    const { paginationValue } = event.detail;
    this.page = paginationValue;

    const startIndex = (this.page - 1) * this.rowsPerPage;
    const endIndex = startIndex + this.rowsPerPage;
    this.tableData = exampleData.slice(startIndex, endIndex);
  }
}
