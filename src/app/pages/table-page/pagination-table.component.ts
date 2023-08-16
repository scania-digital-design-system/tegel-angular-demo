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
  selector: 'app-pagination-table',
  template: `
    <h1>Pagination Table</h1>
    <tds-table vertical-dividers="false" compact-design="false" enable-responsive="false">
      <tds-table-header>
        <tds-header-cell column-key="truck" column-title="Truck type"></tds-header-cell>
        <tds-header-cell column-key="driver" column-title="Driver name"></tds-header-cell>
        <tds-header-cell column-key="country" column-title="Country"></tds-header-cell>
        <tds-header-cell column-key="mileage" column-title="Mileage" text-align="right"></tds-header-cell>
      </tds-table-header>
      <tds-table-body #paginationTableBody></tds-table-body>
      <tds-table-footer default-page="1" pages="4" pagination (tdsPageChange)="paginate($event)"></tds-table-footer>
    </tds-table>
  `,
  styles: [``],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PaginationTableComponent implements AfterViewInit {
  @ViewChild('paginationTableBody', { static: false}) paginationTableBody: ElementRef
  renderer2 = inject(Renderer2)
  @Input() tableData: TableData[]

  ngAfterViewInit(): void {
    this.setPage(1)
  }

  setPage = (page: number) => {
    const rowsPerPage = 2
    const start = (page - 1) * rowsPerPage
    this.renderer2.setAttribute(this.paginationTableBody.nativeElement, 'body-data', JSON.stringify(this.tableData.slice(start, start + rowsPerPage)))
  }

  paginate($event: any) {
    this.setPage($event.detail.paginationValue)
  }
}
