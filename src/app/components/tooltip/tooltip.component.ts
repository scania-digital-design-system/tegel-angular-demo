import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export default class TooltipComponent {

}
