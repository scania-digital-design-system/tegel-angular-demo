import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
  inject,
  Renderer2,
  AfterViewInit, Input
} from '@angular/core'
import {TableData} from './table-data'

@Component({
  selector: 'app-filter-table',
  template: `
    <h1>Search Table</h1>
    <tds-table vertical-dividers="false" compact-design="false" enable-responsive="false">
      <tds-table-toolbar table-title="Filter" enable-filtering></tds-table-toolbar>
      <tds-table-header>
        <tds-header-cell column-key="truck" column-title="Truck type"></tds-header-cell>
        <tds-header-cell column-key="driver" column-title="Driver name"></tds-header-cell>
        <tds-header-cell column-key="country" column-title="Country"></tds-header-cell>
        <tds-header-cell column-key="mileage" column-title="Mileage"></tds-header-cell>
      </tds-table-header>
      <tds-table-body #filterTableBody no-result-message="The query did not match any data."></tds-table-body>
    </tds-table>
  `,
  styles: [``],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FilterTableComponent implements AfterViewInit {
  @ViewChild('filterTableBody', { static: false}) filterTableBody: ElementRef
  renderer2 = inject(Renderer2)
  @Input() tableData: TableData[]

  ngAfterViewInit(): void {
    this.renderer2.setAttribute(this.filterTableBody.nativeElement, 'body-data', JSON.stringify(this.tableData))
  }
}
