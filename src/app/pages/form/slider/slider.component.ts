import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './slider.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SliderComponent {
  @Input() sliderGroup: FormGroup;
  @ViewChild('stressSlider', { static: true }) stressSlider!: ElementRef<HTMLTdsSliderElement>;
  @ViewChild('balanceSlider', { static: true }) balanceSlider!: ElementRef<HTMLTdsSliderElement>;

  handleChange(event: CustomEvent) {
    const target = event.target as HTMLTdsSliderElement;
    if (target.getAttribute('name') === 'happines') {
      this.sliderGroup.get('stress')?.enable();
      this.stressSlider.nativeElement.disabled = false;
    } else if (target?.getAttribute('name') === 'stress') {
      this.sliderGroup.get('balance')?.enable();
      this.balanceSlider.nativeElement.disabled = false;
    }
  }
}
