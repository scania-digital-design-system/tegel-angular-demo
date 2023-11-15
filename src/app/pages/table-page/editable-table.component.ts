import { Component, ViewChild } from '@angular/core';
import { KeyValuePipe, NgForOf, NgIf } from '@angular/common';
import { TegelModule } from '@scania/tegel-angular';
import exampleData from './exampleData.json';

@Component({
  selector: 'app-editable-table',
  template: `
    <div class="tds-headline-02 tds-u-pb1 tds-u-pt3">Editable cells</div>
    <p>This Table uses an edit toggle to enable editing for all cells in a column in the table.</p>
    <p>Note: This does not work for compact design table.</p>
    <div class="tds-u-pb1">
      <tds-toggle
        #editToggle
        toggle-id="edit-table-toggle"
        headline="Edit mode"
        (tdsToggle)="handleTdsEditToggle()"
      >
        <div slot="label">{{ editMode ? 'On' : 'Off' }}</div>
      </tds-toggle>
    </div>
    <tds-table
      compact-design="false"
      responsive
      noMinWidth
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
          textAlign="right"
        ></tds-header-cell>
      </tds-table-header>
      <tds-table-body>
        <tds-table-body-row *ngFor="let row of tableData">
          <tds-body-cell cell-key="truck">
            {{ row.truck }}
          </tds-body-cell>
          <tds-body-cell
            *ngIf="editMode"
            cell-key="driver"
            disable-padding="true"
          >
            <tds-text-field
              *ngIf="editMode"
              size="md"
              placeholder=""
              [value]="row.driver"
              noMinWidth="true"
              (tdsChange)="handleEditDriver(row.id, $event)"
            ></tds-text-field>
          </tds-body-cell>
          <tds-body-cell
            *ngIf="!editMode"
            cell-key="driver"
            disable-padding="false"
          >
            {{ row.driver }}
          </tds-body-cell>
          <tds-body-cell cell-key="country">
            {{ row.country }}
          </tds-body-cell>
          <tds-body-cell
            *ngIf="editMode"
            cell-key="mileage"
            disable-padding="true"
            class="tds-u-textalign-end"
          >
            <tds-text-field
              *ngIf="editMode"
              size="md"
              placeholder=""
              [value]="row.mileage"
              noMinWidth="true"
              (tdsChange)="handleEditMilage(row.id, $event)"
            ></tds-text-field>
          </tds-body-cell>
          <tds-body-cell
            *ngIf="!editMode"
            cell-key="mileage"
            class="tds-u-textalign-end"
            disable-padding="false"
          >
            {{ row.mileage }}
          </tds-body-cell>
        </tds-table-body-row>
      </tds-table-body>
    </tds-table>
  `,
  styles: [``],
  standalone: true,
  imports: [NgForOf, KeyValuePipe, NgIf, TegelModule],
})
export class EditableTableComponent {
  @ViewChild('editToggle', { static: true }) toggle1: HTMLTdsToggleElement;

  tableData = exampleData;
  tempSaveData = exampleData;
  editMode = false;

  handleTdsEditToggle() {
    if (this.editMode) {
      this.saveEdit();
    }

    this.editMode = !this.editMode;
  }

  saveEdit() {
    this.tableData = this.tempSaveData;
  }

  handleEditDriver(rowId: string | number, value: any) {
    this.tempSaveData = this.tempSaveData.map((row) => {
      return {
        ...row,
        driver: row.id === rowId ? value.target.value : row.driver,
      };
    });
  }

  handleEditMilage(rowId: string | number, value: any) {
    this.tempSaveData = this.tempSaveData.map((row) => {
      return {
        ...row,
        mileage: row.id === rowId ? value.target.value : row.mileage,
      };
    });
  }
}
