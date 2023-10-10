import {  Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TegelModule } from '@scania/tegel-angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  standalone: true,
  imports: [RouterLink, TegelModule],
})
export class FooterComponent {}
