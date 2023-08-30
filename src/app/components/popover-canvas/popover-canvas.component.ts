import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popover-canvas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popover-canvas.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export default class PopoverCanvasComponent {
  showPrinterInformation = false;

  handleTogglePrinterInformation(event: any) {
    this.showPrinterInformation = event.detail.checked;
  }
}
