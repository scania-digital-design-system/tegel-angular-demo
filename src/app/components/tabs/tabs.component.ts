import { Component } from '@angular/core';
import { TegelModule } from '@scania/tegel-angular';

@Component({
  selector: 'app-tabs',
  standalone: true,
  template: `
    <div class="tds-headline-02 tds-u-pb1">Tabs</div>
    <div class="tds-headline-03 tds-u-pb3 tds-u-pt3">Folder</div>
    <tds-folder-tabs>
      <tds-folder-tab>
        <button>First tab</button>
      </tds-folder-tab>
      <tds-folder-tab>
        <button>Second tab is much longer</button>
      </tds-folder-tab>
      <tds-folder-tab>
        <button>Third tab</button>
      </tds-folder-tab>
      <tds-folder-tab disabled>
        <button>Fourth tab</button>
      </tds-folder-tab>
    </tds-folder-tabs>

    <div class="tds-headline-03 tds-u-pb3 tds-u-pt3">Inline</div>
    <tds-inline-tabs>
      <tds-inline-tab>
        <button>First tab</button>
      </tds-inline-tab>
      <tds-inline-tab>
        <button>Second tab is much longer</button>
      </tds-inline-tab>
      <tds-inline-tab>
        <button>Third tab</button>
      </tds-inline-tab>
      <tds-inline-tab disabled>
        <button>Fourth tab</button>
      </tds-inline-tab>
    </tds-inline-tabs>

    <div class="tds-headline-03 tds-u-pb3 tds-u-pt3">Navigation</div>
    <tds-navigation-tabs>
      <tds-navigation-tab>
        <a href="#">First tab</a>
      </tds-navigation-tab>
      <tds-navigation-tab>
        <a href="#">Second tab is much longer</a>
      </tds-navigation-tab>
      <tds-navigation-tab>
        <a href="#">Third tab</a>
      </tds-navigation-tab>
      <tds-navigation-tab disabled>
        <a href="javascript:void(0)">Fourth tab</a>
      </tds-navigation-tab>
    </tds-navigation-tabs>
  `,
  imports: [TegelModule]
})
export class TabsComponent {}
