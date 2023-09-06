import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-toggle',
  standalone: true,
  template: `
    <h2 class="tds-headline-02 tds-u-pb1">Toggle</h2>
    <div class="tds-u-flex tds-u-gap2">
      <tds-toggle
        #toggle1
        toggle-id="example-toggle"
        headline="Test this toggle, observe Console for results"
        size="lg"
        (tdsToggle)="handleTdsToggle($event)"
      >
        <div slot="label">Click on me!</div>
      </tds-toggle>

      <tds-toggle
        #toggle2
        toggle-id="example-toggle"
        headline="Disabled toggle"
        size="lg"
        disabled
      >
        <div slot="label">Click on me!</div>
      </tds-toggle>
    </div>

    <p class="tds-body-02">
      A toggle can also be toggle programmatically, try it by pressing the button below.
    </p>

    <tds-button
      text="Toggle!"
      size="md"
      (click)="toggleProgrammatically()"
    ></tds-button>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ToggleComponent {
  @ViewChild('toggle1', { static: true }) toggle1: ElementRef<HTMLTdsToggleElement> | undefined;
  @ViewChild('toggle2', { static: true }) toggle2: ElementRef<HTMLTdsToggleElement> | undefined;
  handleTdsToggle(event: CustomEvent) {
    console.log('tdsToggle event received', event.detail);
  }

  toggleProgrammatically() {
    this.toggle1?.nativeElement.toggle();
    this.toggle2?.nativeElement.toggle();
  }
}
