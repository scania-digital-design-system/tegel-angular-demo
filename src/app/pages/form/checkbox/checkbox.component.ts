import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CheckboxDirective } from 'src/app/directives/checkbox.directive';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule, CheckboxDirective],
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CheckboxComponent {

  @Input() checkboxGroup: FormGroup;
  checked: boolean = false;

}
