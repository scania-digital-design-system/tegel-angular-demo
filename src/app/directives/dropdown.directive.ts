
import { Directive, ElementRef, forwardRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: 'tds-dropdown',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownDirective),
      multi: true,
    },
  ],
})
export class DropdownDirective implements ControlValueAccessor {
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

  setDisabledState(isDisabled: boolean): void {
    this.host.nativeElement.disabled = isDisabled;
  }

  @HostListener('tdsChange', ['$event'])
  handleValueChanged(event: CustomEvent) {
    console.log("on change");

    if (this.onChange) {
      this.onChange(event.detail.value);
    }
  }
}
