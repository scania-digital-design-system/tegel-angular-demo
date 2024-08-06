import {  Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TegelModule } from '@scania/tegel-angular';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TegelModule],
  templateUrl: './checkbox.component.html',
})
export class CheckboxComponent {
  @Input() checkboxGroup: FormGroup;
}
