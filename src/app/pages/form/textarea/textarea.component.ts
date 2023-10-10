import { CommonModule } from '@angular/common';
import {  Component, Input, inject } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TegelModule } from '@scania/tegel-angular';

@Component({
  selector: 'app-textarea',
  standalone: true,
  templateUrl: './textarea.component.html',
  imports: [ReactiveFormsModule, CommonModule, TegelModule],
})
export class TextareaComponent {
  public fb = inject(NonNullableFormBuilder);
  onTouched: any = () => {};

  @Input() textareaGroup: FormGroup;

  disabled = false;
  state = 'default';
  helper = undefined;

  ngOnInit() {
    console.log(this.textareaGroup);
  }
}
