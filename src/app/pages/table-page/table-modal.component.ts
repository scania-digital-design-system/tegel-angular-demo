import {  Component, Input } from '@angular/core';
import { TegelModule } from '@scania/tegel-angular';
@Component({
  selector: 'app-table-modal',
  template: `
    <tds-modal
      selector="#my-modal-button"
      id="my-modal"
      show
      size="lg"
      actions-position="static"
    >
      <h5
        class="tds-modal-headline"
        slot="header"
      >
        Batch Actions example
      </h5>
      <span slot="body">
        <p>Downloaded data:</p>
        <pre>{{ content }}</pre>
      </span>
    </tds-modal>
  `,
  styles: [``],
  standalone: true,
  imports: [TegelModule]
})
export class TableModalComponent {
  @Input() content: string;
}
