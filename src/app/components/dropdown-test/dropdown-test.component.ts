import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TegelModule } from '@scania/tegel-angular';

@Component({
  selector: 'app-dropdown-test',
  standalone: true,
  templateUrl: './dropdown-test.component.html', // Update this line
  imports: [TegelModule, CommonModule],
})
export class DropdownTestComponent {
  @ViewChild('dropdownTestRef', { static: true }) dropdownTestRef: HTMLTdsDropdownElement;

  dropdownValue = 2;

  dropdownOptions = [
    { value: '1', label: 'Option 1 string' },
    { value: 2, label: 'Option 2 number' },
    { value: '3', label: 'Option 3 string' },
    { value: 4, label: 'Option 4 number' },
    { value: '5', label: 'Option 5 string' },
    { value: 6, label: 'Option 6 number' },
    { value: '7', label: 'Option 7 string' },
  ];

  handleTdsChange(event: any) {
    console.log('Dropdown changed:', event.detail.value, ', type:', typeof event.detail.value);
  }

  resetDropdown() {
    // Check if the dropdown component instance is accessible
    if (this.dropdownTestRef) {
      this.dropdownTestRef.reset();
    } else {
      console.log('Dropdown reference is NOT valid, cannot call reset.');
    }
  }
}
