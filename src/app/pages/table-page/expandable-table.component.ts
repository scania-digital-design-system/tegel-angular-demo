import {  Component, Input } from '@angular/core';
import { KeyValuePipe, NgForOf, NgIf } from '@angular/common';
import { TegelModule } from '@scania/tegel-angular';
import exampleData from './exampleData.json';


@Component({
  selector: 'app-expandable-table',
  template: `
    <div class="tds-headline-02 tds-u-pb1 tds-u-pt3">Expandable Rows</div>
    <p>This Table uses expandable rows.</p>
    <tds-table
      expandable-rows
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
        <tds-table-body-row-expandable>
          <tds-body-cell cell-value="L-series" cell-key="truck"></tds-body-cell>
          <tds-body-cell cell-value="Ferrell Wallace" cell-key="driver"></tds-body-cell>
          <tds-body-cell cell-value="Brazil" cell-key="country"></tds-body-cell>
          <tds-body-cell cell-value="8769" cell-key="mileage"></tds-body-cell>
          <div slot="expand-row">The L-series is great!</div>
        </tds-table-body-row-expandable>
        <tds-table-body-row-expandable>
          <tds-body-cell cell-value="P-series" cell-key="truck"></tds-body-cell>
          <tds-body-cell cell-value="Sonya Bruce" cell-key="driver"></tds-body-cell>
          <tds-body-cell cell-value="Portugal" cell-key="country"></tds-body-cell>
          <tds-body-cell cell-value="789" cell-key="mileage"></tds-body-cell>
          <div slot="expand-row">
            The P-series is a great choice of truck. You can read more about it
            <tds-link>
              <a href="/">here.</a>
            </tds-link>
          </div>
        </tds-table-body-row-expandable>
        <tds-table-body-row-expandable>
          <tds-body-cell cell-value="M-series" cell-key="truck"></tds-body-cell>
          <tds-body-cell cell-value="Guerra Bowman" cell-key="driver"></tds-body-cell>
          <tds-body-cell cell-value="Sweden" cell-key="country"></tds-body-cell>
          <tds-body-cell cell-value="11551" cell-key="mileage"></tds-body-cell>
          <div class="tds-u-flex" slot="expand-row">
            <p>The M-series is in stock!</p>
            <tds-button
              onclick="alert('Your order has been placed!');"
              size="md"
              variant="primary"
              text="Order"
            ></tds-button>
          </div>
        </tds-table-body-row-expandable>
      </tds-table-body>
    </tds-table>
  `,
  styles: [``],
  standalone: true,
  imports: [NgForOf, KeyValuePipe, NgIf, TegelModule],
})
export class ExpandableTableComponent {}
