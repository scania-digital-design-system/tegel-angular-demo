import {
  
    Component
  } from '@angular/core'
  import AgGrid from './ag-grid.component'
  import AgGridEditableCells from './ag-grid-editable-cells.component'
  import {AsyncPipe} from '@angular/common'
  import { TegelModule } from '@scania/tegel-angular'
  
  @Component({
    selector: 'app-table-page',
    template: `
      <app-ag-grid></app-ag-grid>
      <app-ag-grid-editable-cells></app-ag-grid-editable-cells>
    `,
    styles: [``],
    standalone: true,
    imports: [
      AgGrid,
      AgGridEditableCells,
      AsyncPipe,
      TegelModule
    ],
  })
  export default class AgGridPageComponent {
  }