import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TegelModule } from '@scania/tegel-angular';

@Component({
  selector: 'app-basic-table',
  template: `
    <div class="tds-headline-02 tds-u-pb1">Basic Table</div>
    <p>This is a basic Table implementation.</p>
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
          text-align="right"
          cell-key="mileage"
          cell-value="Mileage"
        ></tds-header-cell>
      </tds-table-header>
      <tds-table-body>
        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell
            cell-value="Sweden"
            cell-key="country"
          ></tds-body-cell>
          <tds-body-cell
            text-align="right"
            cell-value="4000"
            cell-key="mileage"
          ></tds-body-cell>
        </tds-table-body-row>
        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell
            cell-value="Germany"
            cell-key="country"
          ></tds-body-cell>
          <tds-body-cell
            text-align="right"
            cell-value="260"
            cell-key="mileage"
          ></tds-body-cell>
        </tds-table-body-row>
        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell
            cell-value="Norway"
            cell-key="country"
          ></tds-body-cell>
          <tds-body-cell
            text-align="right"
            cell-value="5889"
            cell-key="mileage"
          ></tds-body-cell>
        </tds-table-body-row>
      </tds-table-body>
    </tds-table>
  `,
  styles: [``],
  standalone: true,
  imports: [CommonModule, TegelModule],
})
export class BasicTableComponent {}
