import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './checkbox.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CheckboxComponent {
  @Input() checkboxGroup: FormGroup;

  handleCheckboxChange(event: any, name: string) {
    this.checkboxGroup.get(name)?.setValue(event.detail.checked);
  }
}
