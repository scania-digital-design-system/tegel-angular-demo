import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mode-variant-switcher',
  templateUrl: './mode-variant-switcher.component.html',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ModeVariantSwitcherComponent {
  @Output() modeVariantToggle = new EventEmitter<void>();

  toggleModeVariant() {
    this.modeVariantToggle.emit();
  }
}
