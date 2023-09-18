import {  Component, Input, OnInit, forwardRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, NG_VALUE_ACCESSOR, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TegelModule } from '@scania/tegel-angular';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TegelModule],
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
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

  getDefaultDate(){
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because months are 0-based
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  


}
