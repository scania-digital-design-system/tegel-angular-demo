import { Component, ElementRef, ViewChild } from '@angular/core';
import norwayData from '../../../../assets/norwegianTows.json';
import swedenData from '../../../../assets/swedishTowns.json';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import ReactiveFormsComponent from '@pages/form/reactive-forms/reactive-forms.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { RadioButtonComponent } from '../radio-button/radio-button.component';
import { SliderComponent } from '../slider/slider.component';
import { TextInputComponent } from '../text-input/text-input.component';
import BreadcrumbsComponent from '../../../navigation/breadcrumbs/breadcrumbs.component';
import { TegelModule } from '@scania/tegel-angular';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveFormsComponent,
    TextInputComponent,
    CheckboxComponent,
    RadioButtonComponent,
    SliderComponent,
    DropdownComponent,
    BreadcrumbsComponent,
    TegelModule,
  ],
})
export default class SimpleFormComponent {
  nowegianTowns = norwayData;
  swedishTowns = swedenData;
  selectedCountry = 'sweden';
  textAreaDisabled = true;
  @ViewChild('addressField', { static: true }) addressField!: HTMLTdsTextFieldElement;
  addressState: 'error' | 'default' = 'default';
  occupationalEssayState: 'error' | 'default' = 'default';
  occupationalEssayHelper: undefined | 'You dont have enough characters.' = undefined;
  stressSliderDisabled = true;
  balanceSliderDisabled = true;
  sendingStatus = false;

  constructor() { }

  handleSliderChange() {
    this.stressSliderDisabled = false;
  }

  handleStressSliderChange() {
    this.balanceSliderDisabled = false
  }

  handleTextAreaChange(event: any) {
    this.textAreaDisabled = !event.detail.target.value;
  }

  handleDropdownChange(event: any) {
    this.selectedCountry = event.detail.value;
  }

  handleSelectedNorweiganTownsChange(event: any) {
    console.log('handleSelectedNorweiganTownsChange', event);
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const occupationalEssay = formData.get('occupationalEssay') as string;
    if (occupationalEssay?.length < 50) {
      this.occupationalEssayState = 'error';
      this.occupationalEssayHelper = 'You dont have enough characters.';
    } else if (this.addressField.value.length < 1) {
      this.addressState = 'error';
    } else {
      this.occupationalEssayState = 'default';
      this.occupationalEssayHelper = undefined;
      this.addressState = 'default';

      this.sendingStatus = true;

      setTimeout(() => {
        this.sendingStatus = false;
      }, 3000);

      formData.forEach((value, key) => {
        console.log('Key:', key, 'Value:', value);
      });
      form.reset();
    }
  }
}
