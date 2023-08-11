import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild } from '@angular/core';
import norwayData from '../../../../assets/norwegianTows.json';
import swedenData from '../../../../assets/swedishTowns.json';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbsComponent } from 'src/app/components/breadcrumbs/breadcrumbs.component';
import { AdvancedFormComponent } from '../advanced-form/advanced-form.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { RadioButtonComponent } from '../radio-button/radio-button.component';
import { SliderComponent } from '../slider/slider.component';
import { TextInputComponent } from '../text-input/text-input.component';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdvancedFormComponent,
    TextInputComponent,
    CheckboxComponent,
    RadioButtonComponent,
    SliderComponent,
    DropdownComponent,
    BreadcrumbsComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SimpleFormComponent {

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
}
