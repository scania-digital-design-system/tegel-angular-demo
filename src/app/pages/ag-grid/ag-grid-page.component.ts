import {
  
    Component
  } from '@angular/core'
  import AgGridColumnSearch from './ag-grid-column-search.component'
  import AgGridColumnSearchFloatingFilter from './ag-grid-column-search-floating-filter.component'
  import AgGridEditableCells from './ag-grid-editable-cells.component'
  import {AsyncPipe} from '@angular/common'
  import { TegelModule } from '@scania/tegel-angular'
  
  @Component({
    selector: 'app-table-page',
    template: `
      <app-ag-grid-column-search></app-ag-grid-column-search>
      <app-ag-grid-column-search-floating-filter></app-ag-grid-column-search-floating-filter>
      <app-ag-grid-editable-cells></app-ag-grid-editable-cells>
    `,
    styles: [``],
    standalone: true,
    imports: [
      AgGridColumnSearch,
      AgGridEditableCells,
      AgGridColumnSearchFloatingFilter,
      AsyncPipe,
      TegelModule
    ],
  })
  export default class AgGridPageComponent {}
