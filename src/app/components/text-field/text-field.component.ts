import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'app-text-field',
  standalone: true,
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TextFieldComponent {

}
