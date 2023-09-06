import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-tabs',
  standalone: true,
  template: `
    <div class="tds-headline-02 tds-u-pb1">Tabs</div>

    <p class="tds-body-01 tds-u-pt1">Folder tabs</p>
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

    <p class="tds-body-01 tds-u-pt1">Inline tabs</p>
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

    <p class="tds-body-01 tds-u-pt1">Navigation tabs</p>

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
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TabsComponent {}
