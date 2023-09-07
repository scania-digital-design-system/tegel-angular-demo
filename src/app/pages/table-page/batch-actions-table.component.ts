import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { ModalDirective } from '@directives/modal.directive';
import exampleData from './exampleData.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-batch-actions-table',
  template: `
    <h1>Batch Actions</h1>
    <tds-table
      #table
      id="batchTable"
      multiselect
      vertical-dividers="false"
      compact-design="false"
      responsive="false"
    >
      <tds-table-toolbar table-title="Batch action">
        <div slot="end">
          <tds-button
            (click)="download()"
            type="primary"
            size="sm"
            text="Download"
          ></tds-button>
        </div>
      </tds-table-toolbar>
      <tds-table-header
        multiselect
        (tdsSelectAll)="selectAll($event)"
        [allSelected]="allSelected"
      >
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
        <tds-table-body-row
          *ngFor="let row of tableData"
          selected="{{ row.selected }}"
          (tdsSelect)="handleRowSelect(row.id, $event)"
        >
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
    <ng-template modal-dr />
  `,
  imports: [ModalDirective, CommonModule],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BatchActionsTableComponent {
  @ViewChild(ModalDirective, { static: true }) modalDirective!: ModalDirective;
  @ViewChild('table', { static: false }) tableRef: ElementRef;

  tableData = exampleData;

  allSelected = this.tableData.every((row) => row.selected);

  async download() {
    this.modalDirective.showModal(
      JSON.stringify(await this.tableRef.nativeElement.getSelectedRows()),
    );
  }

  selectAll(event: any) {
    const { checked } = event.detail;
    this.tableData = this.tableData.map((row) => {
      return {
        ...row,
        selected: checked,
      };
    });

    this.checkIfAllSelected();
  }
  handleRowSelect(rowId: number | string, event: any) {
    this.tableData = this.tableData.map((row) => {
      return {
        ...row,
        selected: row.id === rowId ? event.detail.checked : row.selected,
      };
    });

    this.checkIfAllSelected();
  }

  checkIfAllSelected() {
    const numberOfRows = this.tableData.length;
    const numberOfSelected = this.tableData.filter((item) => item.selected === true).length;
    this.allSelected = numberOfRows === numberOfSelected;
  }
}
