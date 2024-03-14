import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DropdownDirective } from '@directives/dropdown.directive';
import { TegelModule } from '@scania/tegel-angular';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  templateUrl: './dropdown.component.html', // Update this line
  imports: [DropdownDirective, TegelModule],
})
export class DropdownComponent {
  @ViewChild('dropdownRef', { static: true }) dropdownRef: HTMLTdsDropdownElement;

  resetDropdown() {
    // Check if the dropdown component instance is accessible
    if (this.dropdownRef) {
      this.dropdownRef.reset();
    } else {
      console.log('Dropdown reference is NOT valid, cannot call reset.');
    }
  }
}
