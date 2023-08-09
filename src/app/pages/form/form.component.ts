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
import { BreadcrumbsComponent } from 'src/app/components/breadcrumbs/breadcrumbs.component';

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
    DropdownComponent,
    BreadcrumbsComponent
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

  dropdownField: FormGroup = new FormGroup({
    country: new FormControl(''),
    norwegianTown: new FormControl({ value: null, disabled: true}),
    swedishTown: new FormControl({ value: null, disabled: true}),
  })

  sliderField: FormGroup = new FormGroup({
    happines: new FormControl(5),
    stress: new FormControl({ value: '', disabled: true}),
    balance: new FormControl({ value: '', disabled: true}),
  })



  constructor(){}

  submitForm(){
    console.log("textfield", this.textFormField.value);

    console.log("checkboxField", this.checkboxField.value);

    console.log("dropdownField", this.dropdownField.value);

    console.log("sliderField", this.sliderField.value);
  }

  ngOnInit(): void {
  }
}
