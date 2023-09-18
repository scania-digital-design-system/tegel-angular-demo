import { Component } from '@angular/core';
import { TegelModule } from '@scania/tegel-angular';

@Component({
  selector: 'app-breadcrumbs',
  template: `
    <div class="tds-headline-02 tds-u-pb1">Breadcrumbs</div>
    <tds-breadcrumbs>
      <tds-breadcrumb>
        <a href="#">Page 1</a>
      </tds-breadcrumb>
      <tds-breadcrumb>
        <a href="#">Page 2</a>
      </tds-breadcrumb>
      <tds-breadcrumb [current]="true">
        <a href="#">Page 3</a>
      </tds-breadcrumb>
    </tds-breadcrumbs>
  `,
  standalone: true,
  imports: [TegelModule]
})
export class BreadcrumbsComponent {}
