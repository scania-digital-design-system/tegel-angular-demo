import {  Component } from '@angular/core';
import TextPageComponent from '../text-page/text-page.component';
import { TegelModule } from '@scania/tegel-angular';

@Component({
  selector: 'app-text-subpage',
  standalone: true,
  templateUrl: './text-subpage.component.html',
  imports: [TextPageComponent, TegelModule],
})
export default class TextSubpageComponent {}
