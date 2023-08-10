
import { Directive, ElementRef, forwardRef, HostListener, Input } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: 'tds-checkbox',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxDirective),
      multi: true,
    },
  ],
})
export class CheckboxDirective implements ControlValueAccessor {
  @Input() checkboxGroup!: FormGroup;
  @Input() name: string;

  
  private onChange: (value: string) => void;

  constructor(private host: ElementRef) {}

  writeValue(value: string): void {
    this.host.nativeElement.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
    this.host.nativeElement.addEventListener('tdsChange', (event: CustomEvent) => {
      this.onChange(event.detail.value);
    });
  }

  registerOnTouched(): void {}


  @HostListener('tdsChange', ['$event'])
  handleValueChanged(event: CustomEvent) {
    this.checkboxGroup.get(this.name)?.setValue(event.detail.checked)
  }
}
