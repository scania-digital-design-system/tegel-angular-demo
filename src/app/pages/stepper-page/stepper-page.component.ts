import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import StepperComponent from '@components/stepper/stepper.component';

@Component({
  selector: 'app-stepper-page',
  templateUrl: './stepper-page.component.html',
  styleUrls: ['./stepper-page.component.css'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, StepperComponent],
})
export default class StepperPageComponent {}
