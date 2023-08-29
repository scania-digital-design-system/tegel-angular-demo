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
import {ModalDirective} from '../../directives/modal.directive'

@Component({
  selector: 'app-batch-actions-table',
  template: `
    <h1>Batch Actions</h1>
    <tds-table id="batchTable" multiselect vertical-dividers="false" compact-design="false" responsive="false">
      <tds-table-toolbar table-title="Batch action">
        <div slot="end">
          <tds-button type="primary" size="sm" text="Download" (click)="download()"></tds-button>
        </div>
      </tds-table-toolbar>
      <tds-table-header>
        <tds-header-cell column-key="truck" column-title="Truck type"></tds-header-cell>
        <tds-header-cell column-key="driver" column-title="Driver name"></tds-header-cell>
        <tds-header-cell column-key="country" column-title="Country"></tds-header-cell>
        <tds-header-cell column-key="mileage" column-title="Mileage"></tds-header-cell>
      </tds-table-header>
      <tds-table-body #tableBody></tds-table-body>
    </tds-table>
    <ng-template modal-dr />
  `,
  styles: [``],
  imports:[ModalDirective],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BatchActionsTableComponent implements AfterViewInit {
  @ViewChild('tableBody', { static: false}) tableBody: ElementRef
  @ViewChild(ModalDirective, { static: true }) modalDirective!: ModalDirective
  renderer2 = inject(Renderer2)
  @Input() tableData: TableData[]

  ngAfterViewInit(): void {
    this.renderer2.setAttribute(this.tableBody.nativeElement, 'body-data', JSON.stringify(this.tableData))
  }

  download() {
    this.modalDirective.showModal(this.tableBody.nativeElement.getAttribute('data-selected-rows'))
  }
}
