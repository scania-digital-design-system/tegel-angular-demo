import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CheckboxComponent } from 'src/app/pages/form/checkbox/checkbox.component';
import { SliderComponent } from 'src/app/pages/form/slider/slider.component';
import { TextInputComponent } from 'src/app/pages/form/text-input/text-input.component';
import { DropdownComponent } from 'src/app/pages/form/dropdown/dropdown.component';
import { BreadcrumbsComponent } from 'src/app/components/breadcrumbs/breadcrumbs.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import norwayData from '../../../assets/norwegianTows.json';
import swedenData from '../../../assets/swedishTowns.json';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextInputComponent,
    CheckboxComponent,
    RadioButtonComponent,
    SliderComponent,
    DropdownComponent,
    BreadcrumbsComponent,
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

  sliderField: FormGroup = new FormGroup({
    happines: new FormControl('5'),
    stress: new FormControl({ value: '0', disabled: true }),
    balance: new FormControl({ value: '0', disabled: true }),
  });
  nowegianTowns = norwayData;
  swedishTowns = swedenData;
  selectedCountry = null;
  textAreaDisabled = true;
  @ViewChild('norwayDropdown', { static: true })
  norwayDropdown!: ElementRef<HTMLTdsDropdownElement>;
  @ViewChild('swedenDropdown', { static: true })
  swedenDropdown!: ElementRef<HTMLTdsDropdownElement>;
  @ViewChild('addressField', { static: true })
  addressField!: ElementRef<HTMLTdsTextFieldElement>;
  addressState: 'error' | 'default' = 'default';
  occupationalEssayState: 'error' | 'default' = 'default';
  occupationalEssayHelper: undefined | 'You dont have enough characters.' = undefined;
  stressSliderDisabled = true;
  balanceSliderDisabled = true;


  constructor() {}

  submitForm() {
    console.log('textfield', this.textFormField.value);

    console.log('dropdownField', this.dropdownField.value);

    console.log('checkboxField', this.checkboxField.value);

    console.log('radioButtonField', this.radioButtonField.value);

    console.log('sliderField', this.sliderField.value);
  }

  handleSliderChange(){
    this.balanceSliderDisabled, this.stressSliderDisabled = false;
  }

  handleTextAreaChange(event: any) {
    this.textAreaDisabled = !(event.detail.target.value);    
  }

  handleDropdownChange(event: any) {
    this.selectedCountry = event.detail.value;
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const occupationalEssay = formData.get('occupationalEssay') as string;
    if(occupationalEssay?.length < 50){
      this.occupationalEssayState = 'error';
      this.occupationalEssayHelper = 'You dont have enough characters.';
    } else if(this.addressField.nativeElement.value.length < 1){
      this.addressState = 'error';
    } else {
      this.occupationalEssayState = 'default';
      this.occupationalEssayHelper = undefined;
      this.addressState = 'default';

      formData.forEach((value, key) => {
        console.log('Key:', key, 'Value:', value);
      });
      form.reset();
    }
  }

  ngOnInit(): void {}
}
