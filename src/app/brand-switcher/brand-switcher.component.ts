import { Component, EventEmitter, Output } from '@angular/core';
import { TegelModule } from '@scania/tegel-angular';

@Component({
  selector: 'app-brand-switcher',
  templateUrl: './brand-switcher.component.html',
  standalone: true,
  imports: [TegelModule],
})
export class BrandSwitcherComponent {
  @Output() brandToggle = new EventEmitter<void>();

  labelText: 'scania' | 'traton' = 'scania';

  toggleMode() {
    this.brandToggle.emit();
    if (this.labelText === 'scania') {
      this.labelText = 'traton';
    } else {
      this.labelText = 'scania';
    }
  }
}
