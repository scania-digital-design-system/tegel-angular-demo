import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, inject } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  standalone: true,
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css'],
  imports: [ReactiveFormsModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TextareaComponent {
  public fb = inject(NonNullableFormBuilder);
  onTouched: any = () => {};
  
  @Input() textareaGroup: FormGroup;

  disabled = false;
  state = 'default'
  helper = undefined;

  ngOnInit(){
    console.log(this.textareaGroup);
    
  }
}
