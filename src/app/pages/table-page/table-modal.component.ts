import {
    CUSTOM_ELEMENTS_SCHEMA,
    Component, Input,
  } from '@angular/core'
  @Component({
    selector: 'app-table-modal',
    template: `
      <tds-modal
        selector="#my-modal-button"
        id="my-modal"
        show
        size="lg"
        actions="static"
      >
        <h5 class="tds-modal-headline" slot="header">
          Batch Actions example
        </h5>
        <span slot="body">
        <p>Downloaded data:</p>
          {{content}}
        </span>
      </tds-modal>
    `,
    styles: [``],
    standalone: true,
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
  export class TableModalComponent {
    @Input() content: string
  }