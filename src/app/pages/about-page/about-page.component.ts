import { Component } from '@angular/core';
import { TegelModule } from '@scania/tegel-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-page',
  standalone: true,
  templateUrl: './about-page.component.html',
  imports: [TegelModule, CommonModule],
})
export default class AboutPageComponent {
  selectedValues: { [key: string]: any } = {};

  handleDropdownChange(event: any, dropdownName: string) {
    this.selectedValues = {
      ...this.selectedValues,
      [dropdownName]: event.detail.value,
    };
  }

  getSelectedDisplay(value: any): string {
    if (Array.isArray(value)) {
      return value.join(', ');
    }
    return value || 'None';
  }
}
