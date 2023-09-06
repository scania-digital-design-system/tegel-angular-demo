import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-stepper-example',
  standalone: true,
  template: `
    <div class="tds-headline-02 tds-u-pb1">Stepper</div>
    <tds-stepper
      size="lg"
      label-position="below"
      orientation="horizontal"
    >
      <tds-step
        state="success"
        index="1"
      >
        <div slot="label">Success step</div>
      </tds-step>
      <tds-step
        state="error"
        index="2"
      >
        <div slot="label">Error step</div>
      </tds-step>
      <tds-step
        state="current"
        index="3"
      >
        <div slot="label">Current step</div>
      </tds-step>
      <tds-step index="4">
        <div slot="label">Upcoming step</div>
      </tds-step>
    </tds-stepper>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StepperExampleComponent {}
