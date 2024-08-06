import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

import { TegelModule } from '@scania/tegel-angular';
import { CommonModule } from '@angular/common';

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
    <tds-inline-tabs
      *ngIf="loaded"
      id="inline-tabs"
      #tabsWrapper
    >
      <tds-inline-tab *ngFor="let tab of inlineTabs">
        <button>{{ tab }}</button>
      </tds-inline-tab>
    </tds-inline-tabs>
    <button (click)="injectInlineTab()">Inject inline tabs</button>
    <button (click)="injectSingleTab()">Inject single tab</button>
    <button (click)="setDefaultSelectedIndex()">Set default selected index</button>

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
  imports: [TegelModule, CommonModule],
})
export class TabsComponent implements AfterViewInit {
  @ViewChild('tabsWrapper') tabsWrapper: ElementRef;
  loaded = false;
  selectedIndex = 0;
  inlineTabs: string[] = ['First tab', 'Second tab is much longer', 'Third tab', 'Fourth tab'];

  ngAfterViewInit() {
    // Ensure the element is available after view initialization
    if (this.tabsWrapper) {
      this.tabsWrapper.nativeElement.defaultSelectedIndex = this.selectedIndex;
    }
  }

  injectInlineTab() {
    this.loaded = true;
  }

  injectSingleTab() {
    //Add new tab to the end of the list
    this.inlineTabs.push(`${this.inlineTabs.length} tab`);
  }

  setDefaultSelectedIndex() {
    if (this.tabsWrapper) {
      const tabsWrapper = this.tabsWrapper.nativeElement;
      tabsWrapper.defaultSelectedIndex = this.selectedIndex;
    }
  }
}
