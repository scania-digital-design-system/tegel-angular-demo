import { CommonModule } from '@angular/common';
import {  Component } from '@angular/core';
import StepperComponent from '@components/stepper/stepper.component';
import { TegelModule } from '@scania/tegel-angular';

@Component({
  selector: 'app-stepper-page',
  templateUrl: './stepper-page.component.html',
  standalone: true,
  imports: [CommonModule, StepperComponent, TegelModule],
})
export default class StepperPageComponent {}
