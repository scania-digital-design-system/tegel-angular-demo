import {  Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TegelModule } from '@scania/tegel-angular';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule, TegelModule],
  templateUrl: './spinner.component.html',
})
export default class SpinnerComponent {}
