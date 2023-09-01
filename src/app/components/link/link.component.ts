import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-link',
  standalone: true,
  template: `
    <div class="tds-headline-02 tds-u-pb1">Link</div>
    <tds-link>
      <a
        href="https://tegel.scania.com/home"
        target="_blank"
        >Tegel</a
      >
    </tds-link>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LinkComponent {}
