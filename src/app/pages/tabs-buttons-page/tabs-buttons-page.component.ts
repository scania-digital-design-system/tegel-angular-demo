import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import BreadcrumbsComponent from '../../navigation/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-tabs-buttons-page',
  templateUrl: './tabs-buttons-page.component.html',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [BreadcrumbsComponent],
})
export default class TabsButtonsPageComponent {
  folderTabIndex: number = 0;
  inlineTabIndex: number = 0;
  navigationTabIndex: number = 0;

  onFolderTabChange(event: any): void {
    this.folderTabIndex = event.detail.selectedTabIndex;
    console.log(event);
  }

  onInlineTabChange(event: any): void {
    this.inlineTabIndex = event.detail.selectedTabIndex;
    console.log(event);
  }

  onNavigationTabChange(event: any): void {
    this.navigationTabIndex = event.detail.selectedTabIndex;
    console.log(event);
  }
}
