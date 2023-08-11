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
  selector: 'app-sortable-table',
  template: `
    <h1>Sortable Table</h1>
    <tds-table vertical-dividers="false" compact-design="false" enable-responsive="false">
      <tds-table-toolbar table-title="Sorting"></tds-table-toolbar>
      <tds-table-header>
        <tds-header-cell column-key="truck" column-title="Truck type" sortable="true"></tds-header-cell>
        <tds-header-cell column-key="driver" column-title="Driver name" sortable="true"></tds-header-cell>
        <tds-header-cell column-key="country" column-title="Country" sortable="true"></tds-header-cell>
        <tds-header-cell column-key="mileage" column-title="Mileage" sortable="true"></tds-header-cell>
      </tds-table-header>
      <tds-table-body #sortableTableBody></tds-table-body>
    </tds-table>
  `,
  styles: [``],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SortableTableComponent implements AfterViewInit {
  @ViewChild('sortableTableBody', { static: false}) sortableTableBody: ElementRef
  renderer2 = inject(Renderer2)
  @Input() tableData: TableData[]

  ngAfterViewInit(): void {
    this.renderer2.setAttribute(this.sortableTableBody.nativeElement, 'body-data', JSON.stringify(this.tableData))
  }
}
