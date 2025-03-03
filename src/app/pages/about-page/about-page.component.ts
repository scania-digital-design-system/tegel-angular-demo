import { Component } from '@angular/core';
import { TegelModule } from '@scania/tegel-angular';
import { DropdownTestComponent } from '@components/dropdown-test/dropdown-test.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  templateUrl: './about-page.component.html',
  imports: [TegelModule, DropdownTestComponent],
})
export default class AboutPageComponent {}
