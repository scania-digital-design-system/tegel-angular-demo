import {  Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TegelModule } from '@scania/tegel-angular';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TegelModule],
  templateUrl: './slider.component.html',
})
export class SliderComponent {
  @Input() sliderGroup: FormGroup;
  @ViewChild('stressSlider', { static: true }) stressSlider!: HTMLTdsSliderElement;
  @ViewChild('balanceSlider', { static: true }) balanceSlider!: HTMLTdsSliderElement;

  handleChange(event: CustomEvent) {
    const target = event.target as HTMLTdsSliderElement;
    if (target.getAttribute('name') === 'happines') {
      this.sliderGroup.get('stress')?.enable();
      this.stressSlider.disabled = false;
    } else if (target?.getAttribute('name') === 'stress') {
      this.sliderGroup.get('balance')?.enable();
      this.balanceSlider.disabled = false;
    }
  }
}
