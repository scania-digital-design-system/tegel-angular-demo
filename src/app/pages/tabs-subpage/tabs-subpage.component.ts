import { CUSTOM_ELEMENTS_SCHEMA, Component, Inject, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { untilDestroyedRef } from 'src/utils';

@Component({
  selector: 'app-tabs-subpage',
  standalone: true,
  templateUrl: './tabs-subpage.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export default class TabsSubpageComponent {
  @Input() pathIndex: number;
}
