import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { TextInputComponent } from '../text-input/text-input.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { RadioButtonComponent } from '../radio-button/radio-button.component';
import { SliderComponent } from '../slider/slider.component';
import { TextareaComponent } from '../textarea/textarea.component';

@Component({
  selector: 'app-advanced-form',
  standalone: true,
  templateUrl: './advanced-form.component.html',
  styleUrls: ['./advanced-form.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextInputComponent,
    DropdownComponent,
    CheckboxComponent,
    RadioButtonComponent,
    TextareaComponent,
    SliderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdvancedFormComponent {
  isEssayInvalid: boolean = false;

  textFieldGroup: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    dateOfBirth: new FormControl(new Date(), Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  });

  dropdownField: FormGroup = new FormGroup({
    country: new FormControl(''),
    norwegianTown: new FormControl({ value: '', disabled: true }),
    swedishTown: new FormControl({ value: '', disabled: true }),
  });

  checkboxField: FormGroup = new FormGroup({
    sodertalje: new FormControl(false),
    sergel: new FormControl(false),
    homeOffice: new FormControl(false),
    building260: new FormControl({ value: false, disabled: true }),
  });

  radioButtonField: FormGroup = new FormGroup({
    timeAtScania: new FormControl('radio-1'),
  });

  textareaField: FormGroup = new FormGroup({
    occupationalEssay: new FormControl('', [Validators.minLength(50), this.essayLengthValidator.bind(this)]),
  });

  sliderField: FormGroup = new FormGroup({
    happines: new FormControl('5'),
    stress: new FormControl({ value: '0', disabled: true }),
    balance: new FormControl({ value: '0', disabled: true }),
  });

  essayLengthValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value as string;

    if (value.length < 50) {
      this.isEssayInvalid = true; // Set the property to true if validation fails
      return { state: 'error' };
    }
    return null; // Validation passed
  }


  submitForm(event: Event) {



    // console.log('textfield', this.textFieldGroup.value);
    console.log('dropdownField', this.dropdownField.value);
    console.log('dropdownField', this.dropdownField.getRawValue());
    console.log('checkboxField', this.checkboxField.value);
    // console.log('radioButtonField', this.radioButtonField.value);
    // console.log('textareaField', this.textareaField.value);
    // console.log('sliderField', this.sliderField.value);
  }
}
