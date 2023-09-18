import {  Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TegelModule } from '@scania/tegel-angular';

@Component({
  selector: 'app-popover-canvas',
  standalone: true,
  imports: [CommonModule, TegelModule],
  templateUrl: './popover-canvas.component.html',
})
export default class PopoverCanvasComponent {
  showPrinterInformation = false;

  handleTogglePrinterInformation(event: any) {
    this.showPrinterInformation = event.detail.checked;
  }
}
