import { Component } from '@angular/core';
import { TegelModule } from '@scania/tegel-angular';

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
  imports: [TegelModule]
})
export class LinkComponent {}
