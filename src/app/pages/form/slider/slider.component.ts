import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SliderComponent {

  @Input() sliderGroup : FormGroup;
  @ViewChild('stressSlider', { static: true }) stressSlider!: ElementRef<HTMLTdsSliderElement>;
  @ViewChild('balanceSlider', { static: true }) balanceSlider!: ElementRef<HTMLTdsSliderElement>;

  handleChange(event:any, name: string){
    this.sliderGroup.get(name)?.enable()
    this.sliderGroup.get(name)?.setValue(event.detail.value)
    if(name === 'happines'){
      this.stressSlider.nativeElement.disabled = false;

    } else if(name === 'stress'){
      this.balanceSlider.nativeElement.disabled = false;

    }
  }
}
