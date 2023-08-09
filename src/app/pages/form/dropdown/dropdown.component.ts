import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from 'src/app/directives/dropdown.directive';
import norwayData from '../../../../assets/norwegianTows.json';
import swedenData from '../../../../assets/swedishTowns.json';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule, DropdownDirective, ReactiveFormsModule],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DropdownComponent {
  nowegianTowns = norwayData
  swedishTowns = swedenData
  @ViewChild('norwayDropdown', { static: true }) norwayDropdown!: ElementRef<HTMLTdsDropdownElement>;
  @ViewChild('swedenDropdown', { static: true }) swedenDropdown!: ElementRef<HTMLTdsDropdownElement>;
  @Input() dropdownGroup: FormGroup;


  
  
  handleChange(event:any){
    if(event.detail.value === 'norway'){
      this.norwayDropdown.nativeElement.disabled = false;
      this.swedenDropdown.nativeElement.disabled = true;
      this.swedenDropdown.nativeElement.reset()
    } else if(event.detail.value === 'sweden'){
      this.swedenDropdown.nativeElement.disabled = false;
      this.norwayDropdown.nativeElement.disabled = true;
      this.norwayDropdown.nativeElement.reset()
    }
    
  }
}
