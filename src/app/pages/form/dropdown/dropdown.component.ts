import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from 'src/app/directives/dropdown.directive';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule, DropdownDirective],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DropdownComponent {

}
