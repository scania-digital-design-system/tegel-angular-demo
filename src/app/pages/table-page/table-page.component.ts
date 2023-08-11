import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
  inject,
  Renderer2,
  AfterViewInit
} from '@angular/core'
import {NgForOf} from '@angular/common'
@Component({
  selector: 'app-table-page',
  template: `
    <tds-table vertical-dividers="false" compact-design="false" enable-responsive="false">
      <tds-table-header>
        <tds-header-cell column-key="truck" column-title="Truck type"></tds-header-cell>
        <tds-header-cell column-key="driver" column-title="Driver name"></tds-header-cell>
        <tds-header-cell column-key="country" column-title="Country"></tds-header-cell>
        <tds-header-cell column-key="mileage" column-title="Mileage"></tds-header-cell>
      </tds-table-header>
      <tds-table-body #tableBody></tds-table-body>
    </tds-table>
  `,
  styles: [``],
  standalone: true,
  imports: [
    NgForOf
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TablePageComponent implements AfterViewInit {
  @ViewChild('tableBody', { static: false}) tableBody: ElementRef
  renderer2 = inject(Renderer2)

  data = [
    {"truck":"L-series","driver":"Sonya Bruce","country":"Argentina","mileage":253987},
    {"truck":"P-series","driver":"Guerra Bowman","country":"Finland","mileage":885252},
    {"truck":"G-series","driver":"Ferrell Wallace","country":"Austria","mileage":7856},
    {"truck":"R-series","driver":"Cox Burris","country":"Italy","mileage":456654},
    {"truck":"S-series","driver":"Montgomery Cervantes","country":"Poland","mileage":65650},
    {"truck":"L-series","driver":"Sheryl Nielsen","country":"Bulgaria","mileage":85225},
    {"truck":"G-series","driver":"Benton Gomez","country":"Slovakia","mileage":80957}
  ]

  ngAfterViewInit(): void {
    this.renderer2.setAttribute(this.tableBody.nativeElement, 'body-data', JSON.stringify(this.data))
  }
}
