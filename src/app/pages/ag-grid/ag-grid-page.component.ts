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
    <div class="tds-u-pb3">
      <tds-toggle
      (tdsToggle)="toggleMode()"
      headline="Toggle AG-Grid mode"
      size="sm"
      checked
        >
        <div slot="label">{{ labelText }}</div>
      </tds-toggle>
    </div>
    <div class="tds-headline-02 tds-u-pb1">AG-Grid Column Search</div>
    <p>This is an implementation of AG-Grid with column search.</p>
    <div [class.ag-theme-quartz]="classToggled" [class.ag-theme-quartz-dark]="!classToggled">
      <app-ag-grid></app-ag-grid>
    </div>
    <div class="tds-headline-02 tds-u-pb1 tds-u-pt3">AG-Grid Editable Cells</div>
    <p>This is an implementation of AG-Grid with editable cells.</p>
    <div [class.ag-theme-quartz]="classToggled" [class.ag-theme-quartz-dark]="!classToggled">
      <app-ag-grid-editable-cells></app-ag-grid-editable-cells>
    </div>
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
    classToggled = true;
    labelText: 'Light' | 'Dark' = 'Light';

    public toggleMode() {
      this.classToggled = !this.classToggled;
      if (this.labelText === 'Light') {
        this.labelText = 'Dark';
      } else {
        this.labelText = 'Light';
      }
    }
  }

