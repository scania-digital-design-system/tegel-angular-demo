import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import TextPageComponent from '../text-page/text-page.component';

@Component({
  selector: 'app-text-subpage',
  standalone: true,
  templateUrl: './text-subpage.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [TextPageComponent],
})
export default class TextSubpageComponent {}
