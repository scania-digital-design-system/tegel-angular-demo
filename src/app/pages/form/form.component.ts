import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DropdownDirective } from 'src/app/directives/dropdown.directive';
import { CheckboxComponent } from 'src/app/pages/form/checkbox/checkbox.component';
import { SliderComponent } from 'src/app/pages/form/slider/slider.component';
import { TextInputComponent } from 'src/app/pages/form/text-input/text-input.component';
import { DropdownComponent } from 'src/app/pages/form/dropdown/dropdown.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DropdownDirective,
    CheckboxComponent,
    SliderComponent,
    TextInputComponent,
    TextInputComponent,
    DropdownComponent
  ],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export default class FormComponent implements OnInit {
  public fb = inject(NonNullableFormBuilder);

  textFormField: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    dateOfBirth: new FormControl(new Date(), Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  });

  checkboxField: FormGroup = new FormGroup({
    sodertalje: new FormControl(false),
    sergel: new FormControl(false),
    homeOffice: new FormControl(false),
    building260: new FormControl(false)
  })



  constructor(){}

  submitForm(){
    console.log("textfield", this.textFormField.value);

    console.log("checkboxField", this.checkboxField.value);

  }

  ngOnInit(): void {
  }
}
