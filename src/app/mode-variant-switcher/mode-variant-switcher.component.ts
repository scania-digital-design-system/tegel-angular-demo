import {  Component, EventEmitter, Input, Output } from '@angular/core';
import { TegelModule } from '@scania/tegel-angular';

@Component({
  selector: 'app-mode-variant-switcher',
  templateUrl: './mode-variant-switcher.component.html',
  standalone: true,
  imports: [TegelModule]
})
export class ModeVariantSwitcherComponent {
  @Output() modeVariantToggle = new EventEmitter<void>();

  labelText: 'On' | 'Off' = 'On';

  toggleModeVariant() {
    this.modeVariantToggle.emit();
    if (this.labelText === 'On') {
      this.labelText = 'Off';
    } else {
      this.labelText = 'On';
    }
  }
}
