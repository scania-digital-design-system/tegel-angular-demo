import {  Component, EventEmitter, Output } from '@angular/core';
import { TegelModule } from '@scania/tegel-angular';

@Component({
  selector: 'app-mode-switcher',
  templateUrl: './mode-switcher.component.html',
  standalone: true,
  imports: [TegelModule]
})
export class ModeSwitcherComponent {
  @Output() modeToggle = new EventEmitter<void>();

  labelText: 'On' | 'Off' = 'On';

  toggleMode() {
    this.modeToggle.emit();
    if (this.labelText === 'On') {
      this.labelText = 'Off';
    } else {
      this.labelText = 'On';
    }
  }
}
