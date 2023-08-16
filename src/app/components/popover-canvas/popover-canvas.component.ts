import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popover-canvas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popover-canvas.component.html',
  styleUrls: ['./popover-canvas.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export default class PopoverCanvasComponent {

  showPopover = false;

}
