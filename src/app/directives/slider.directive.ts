
import { Directive, ElementRef, forwardRef, HostListener, Input } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: 'tds-slider',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SliderDirective),
      multi: true,
    },
  ],
})
export class SliderDirective implements ControlValueAccessor {
  @Input() sliderGroup!: FormGroup;
  @Input() name: string;

  
  private onChange: (value: number) => void;

  constructor(private host: ElementRef) {}

  writeValue(value: number): void {
    this.host.nativeElement.value = value;
  }

  registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
    this.host.nativeElement.addEventListener('tdsChange', (event: CustomEvent) => {
      this.onChange(event.detail.value);
    });
  }

  registerOnTouched(): void {}

  setDisabledState(isDisabled: boolean): void {
    this.host.nativeElement.disabled = isDisabled;
  }

  @HostListener('tdsChange', ['$event'])
  handleValueChanged(event: CustomEvent) {
    this.sliderGroup.get(this.name)?.setValue(event.detail.value)
  }
}
