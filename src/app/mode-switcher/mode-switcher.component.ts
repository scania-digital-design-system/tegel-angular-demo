import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mode-switcher',
  templateUrl: './mode-switcher.component.html',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ModeSwitcherComponent {
  @Output() modeToggle = new EventEmitter<void>();

  toggleMode() {
    this.modeToggle.emit();
  }
}
