import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  standalone: true,
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule]
})
export default class RadioButtonComponent {
  submittedData: string[];
  data = {
    starters: {
      name: 'starters',
      title: 'What would you like to start?',
      required: false,
      fields: [
        {
          name: 'Cucumber salad',
          id: 'cakdse8sf234',
        },
        {
          name: 'Garlic bread',
          id: 'cakdse8sd234',
        },
      ],
    },
    mains: {
      name: 'mains',
      title: 'What would you like for your main?',
      required: false,
      fields: [
        {
          name: 'Salmon',
          id: 'cakdse8234',
        },
        {
          name: 'Veal',
          id: 'iceCrdseam8234',
          disabled: true,
        },
        {
          name: 'Chicken',
          id: 'iceCrssddfeam8234',
          preselected: true,
        },
      ],
    },
    desserts: {
      name: 'desserts',
      title: 'What would you like for dessert?',
      required: true,
      fields: [
        {
          name: 'Cake',
          id: 'cake8234',
        },
        {
          name: 'Pudding',
          id: 'pudding8234',
        },
        {
          name: 'Ice cream',
          id: 'iceCream8234',
        },
        {
          name: 'Tiramisu',
          id: 'iceCrsdfeam8234',
        },
      ],
    },
  };
  processedData = Object.values(this.data);


  isFieldDisabled(field: any): boolean {
    return field && field.disabled;
  }

  isFieldPreselected(field: any): boolean {
    return field && field.preselected;
  }

  onSubmit = (e: any) => {
    e.preventDefault();

    const formEl = e.target as HTMLFormElement;

    const elements = formEl.elements;

    this.submittedData = [
      (elements as any)['starters'].value,
      (elements as any)['mains'].value,
      (elements as any)['desserts'].value,
    ]
  };
}
