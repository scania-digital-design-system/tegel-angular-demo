import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-radio-button',
  standalone: true,
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css'],
  imports: [CommonModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]


})
export class RadioButtonComponent {
  @Input() radioButtonGroup: FormGroup;

  handleRadioChange(event: any, name: string){
    console.log(this.radioButtonGroup.get(name))
    console.log(event.detail.value)
    this.radioButtonGroup.get(name)?.setValue(event.detail.value)
  }
}
