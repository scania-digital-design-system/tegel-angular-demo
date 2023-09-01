import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DropdownDirective } from '@directives/dropdown.directive';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  template: `
    <div class="tds-headline-02 tds-u-pb1">Dropdown</div>
    <tds-dropdown
      name="dropdown"
      label="Label text"
      label-position="outside"
      placeholder="Placeholder"
      helper="Helper text"
      size="lg"
      multiselect
      open-direction="auto"
    >
      <tds-dropdown-option value="option-1">Option 1</tds-dropdown-option>
      <tds-dropdown-option
        disabled
        value="option-2"
        >Option 2
      </tds-dropdown-option>
      <tds-dropdown-option value="option-3">Option 3</tds-dropdown-option>
      <tds-dropdown-option value="option-4">Option 4</tds-dropdown-option>
      <tds-dropdown-option value="option-5">Option 5</tds-dropdown-option>
      <tds-dropdown-option value="option-6">Option 6</tds-dropdown-option>
      <tds-dropdown-option value="option-7">Option 7</tds-dropdown-option>
    </tds-dropdown>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [DropdownDirective],
})
export class DropdownComponent {}
