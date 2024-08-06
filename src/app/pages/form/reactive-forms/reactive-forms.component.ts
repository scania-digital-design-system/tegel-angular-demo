import { CommonModule } from '@angular/common';
import {  Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { TextInputComponent } from '@pages/form/text-input/text-input.component';
import { DropdownComponent } from '@pages/form/dropdown/dropdown.component';
import { CheckboxComponent } from '@pages/form/checkbox/checkbox.component';
import { RadioButtonComponent } from '@pages/form/radio-button/radio-button.component';
import { SliderComponent } from '@pages/form/slider/slider.component';
import { TextareaComponent } from '@pages/form/textarea/textarea.component';
import { TegelModule } from '@scania/tegel-angular';
import {ChipComponent} from "@pages/form/chip/chip.component";
import {ToggleComponent} from "@pages/form/toggle/toggle.component";

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextInputComponent,
    DropdownComponent,
    CheckboxComponent,
    RadioButtonComponent,
    TextareaComponent,
    SliderComponent,
    TegelModule,
    ChipComponent,
    ToggleComponent
  ],
})
export default class ReactiveFormsComponent {
  isEssayInvalid: boolean = false;

  textFieldGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.email]),
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

  chipField: FormGroup = new FormGroup({
    windows: new FormControl(false),
    macOS: new FormControl(false),
    linux: new FormControl(false)
  })

  chipRadioField: FormGroup = new FormGroup({
    preferredOs: new FormControl("windows"),
  })

  toggleField: FormGroup = new FormGroup({
    mouse: new FormControl(true),
    keyboard: new FormControl(true),
    trackpad: new FormControl(false),
    monitor: new FormControl(false)
  })

  radioButtonField: FormGroup = new FormGroup({
    timeAtScania: new FormControl('radio-1'),
  });

  textareaField: FormGroup = new FormGroup({
    occupationalEssay: new FormControl('', [
      Validators.minLength(50),
      this.essayLengthValidator.bind(this),
    ]),
  });

  sliderField: FormGroup = new FormGroup({
    happines: new FormControl(5),
    stress: new FormControl({ value: 0, disabled: true }),
    balance: new FormControl({ value: 0, disabled: true }),
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
    event.preventDefault();

    console.log('textfield', this.textFieldGroup.value);
    console.log('dropdownField', this.dropdownField.value);
    console.log('dropdownField', this.dropdownField.getRawValue());
    console.log('checkboxField', this.checkboxField.value);
    console.log('chipField', this.chipField.value)
    console.log('chipRadioField', this.chipRadioField.value)
    console.log('toggleField', this.toggleField.value);
    console.log('radioButtonField', this.radioButtonField.value);
    console.log('textareaField', this.textareaField.value);
    console.log('sliderField', this.sliderField.value);
  }
}
