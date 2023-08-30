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
  selector: 'app-basic-table',
  template: `
    <h1>Basic Table</h1>
    <tds-table vertical-dividers="false" compact-design="false" responsive="false">
      <tds-table-header>
        <tds-header-cell column-key="truck" column-title="Truck type"></tds-header-cell>
        <tds-header-cell column-key="driver" column-title="Driver name"></tds-header-cell>
        <tds-header-cell column-key="country" column-title="Country"></tds-header-cell>
        <tds-header-cell column-key="mileage" column-title="Mileage"></tds-header-cell>
      </tds-table-header>
      <tds-table-body #basicTableBody></tds-table-body>
    </tds-table>
  `,
  styles: [``],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BasicTableComponent implements AfterViewInit {
  @ViewChild('basicTableBody', { static: false}) basicTableBody: ElementRef
  renderer2 = inject(Renderer2)
  @Input() tableData: TableData[]

  ngAfterViewInit(): void {
    this.renderer2.setAttribute(this.basicTableBody.nativeElement, 'body-data', JSON.stringify(this.tableData))
  }
}
