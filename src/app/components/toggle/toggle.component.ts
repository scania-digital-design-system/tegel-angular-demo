import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-toggle',
  standalone: true,
  template: `
    <h2 class="tds-headline-02 tds-u-pb1">Toggle</h2>
    <tds-toggle
      toggle-id="example-toggle"
      headline="Test this toggle, observe Console for results"
      size="lg"
      (tdsToggle)="handleTdsToggle($event)"
    >
      <div slot="label">Click on me!</div>
    </tds-toggle>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ToggleComponent {
  handleTdsToggle(event: CustomEvent) {
    console.log('tdsToggle event received', event.detail);
  }
}
