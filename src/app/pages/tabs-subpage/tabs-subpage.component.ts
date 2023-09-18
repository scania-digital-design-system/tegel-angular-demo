import {  Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TegelModule } from '@scania/tegel-angular';
import { untilDestroyedRef } from 'src/utils';

@Component({
  selector: 'app-tabs-subpage',
  standalone: true,
  templateUrl: './tabs-subpage.component.html',
  imports: [ TegelModule ]
})
export default class TabsSubpageComponent {
  @Input() pathIndex: number;
}
