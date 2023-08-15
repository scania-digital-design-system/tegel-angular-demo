import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'app-textarea',
  standalone: true,
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export default class TextareaComponent {

}
