import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TegelModule } from '@scania/tegel-angular';

import { generateDummyData } from '../../../../../../data-generator';

@Component({
  selector: 'truck-pagination-table',
  template: `
    <p>Test of Modal with Table that has 700 rows</p>
    <tds-table
      verticalDividers="false"
      compactDesign="false"
      responsive="true"
      noMinWidth="true"
    >
      <tds-table-header>
        <tds-header-cell
          cellKey="truck"
          cellValue="Truck type"
        ></tds-header-cell>
        <tds-header-cell
          cellKey="driver"
          cellValue="Driver name"
        ></tds-header-cell>
        <tds-header-cell
          cellKey="country"
          cellValue="Country"
        ></tds-header-cell>
        <tds-header-cell
          cellKey="mileage"
          cellValue="Mileage"
          textAlign="right"
        ></tds-header-cell>
      </tds-table-header>
      <tds-table-body>
        <tds-table-body-row *ngFor="let row of tableData">
          <tds-body-cell cellKey="truck">
            {{ row.truck }}
          </tds-body-cell>
          <tds-body-cell cellKey="driver">
            {{ row.driver }}
          </tds-body-cell>
          <tds-body-cell cellKey="country">
            {{ row.country }}
          </tds-body-cell>
          <tds-body-cell
            style="text-align:right;"
            cellKey="mileage"
          >
            {{ row.mileage }}
          </tds-body-cell>
        </tds-table-body-row>
      </tds-table-body>
      <tds-table-footer
        pagination="true"
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
  trucksTableData = generateDummyData();

  rowsPerPage = 10;
  page = 0;
  pages = Math.ceil(this.trucksTableData.length / this.rowsPerPage);
  tableData = this.trucksTableData.slice(this.page, this.page + this.rowsPerPage);

  handlePagination(event: any) {
    const { paginationValue } = event.detail;
    this.page = paginationValue;

    const startIndex = (this.page - 1) * this.rowsPerPage;
    const endIndex = startIndex + this.rowsPerPage;
    this.tableData = this.trucksTableData.slice(startIndex, endIndex);
  }
}
