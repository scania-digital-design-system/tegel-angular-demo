import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
} from '@angular/core'

@Component({
  selector: 'app-expandable-table',
  template: `
    <h1>Expandable Table</h1>
    <tds-table enable-expandable-rows vertical-dividers="false" compact-design="false" enable-responsive="false">
      <tds-table-header>
        <tds-header-cell column-key="truck" column-title="Truck type"></tds-header-cell>
        <tds-header-cell column-key="driver" column-title="Driver name"></tds-header-cell>
        <tds-header-cell column-key="country" column-title="Country"></tds-header-cell>
        <tds-header-cell column-key="mileage" column-title="Mileage" text-align="right"></tds-header-cell>
      </tds-table-header>
      <tds-table-body>
        <tds-table-body-row-expandable>
          <tds-body-cell cell-value="Test value 1" cell-key="truck"></tds-body-cell>
          <tds-body-cell cell-value="Test value 2" cell-key="driver"></tds-body-cell>
          <tds-body-cell cell-value="Test value 3" cell-key="country"></tds-body-cell>
          <tds-body-cell cell-value="Test value 4" cell-key="mileage"></tds-body-cell>
          <div slot="expand-row">Hello world 1</div>
        </tds-table-body-row-expandable>
        <tds-table-body-row-expandable>
          <tds-body-cell cell-value="Test value 5" cell-key="truck"></tds-body-cell>
          <tds-body-cell cell-value="Test value 6" cell-key="driver"></tds-body-cell>
          <tds-body-cell cell-value="Test value 7" cell-key="country"></tds-body-cell>
          <tds-body-cell cell-value="Test value 8" cell-key="mileage"></tds-body-cell>
          <div slot="expand-row">Hello to you too</div>
        </tds-table-body-row-expandable>
        <tds-table-body-row-expandable>
          <tds-body-cell cell-value="Test value 9" cell-key="truck"></tds-body-cell>
          <tds-body-cell cell-value="Test value 10" cell-key="driver"></tds-body-cell>
          <tds-body-cell cell-value="Test value 11" cell-key="country"></tds-body-cell>
          <tds-body-cell cell-value="Test value 12" cell-key="mileage"></tds-body-cell>
          <div slot="expand-row"><tds-button type="primary" text="Call to action"></tds-button></div>
        </tds-table-body-row-expandable>
      </tds-table-body>
    </tds-table>
  `,
  styles: [``],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExpandableTableComponent {

}
