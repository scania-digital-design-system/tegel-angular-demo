import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, forwardRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, NG_VALUE_ACCESSOR, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true,
    },
  ],
})
export class TextInputComponent {
  public fb = inject(NonNullableFormBuilder);
  onTouched: any = () => {};


  @Input() textFieldGroup: FormGroup;



  constructor() {
  }


}
