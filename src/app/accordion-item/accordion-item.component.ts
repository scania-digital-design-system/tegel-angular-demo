// accordion-item.component.ts
import { Component, Input, Output, EventEmitter, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AccordionItemComponent {
  @Input() header = '';
  @Input() expanded = false;
  @Input() expandIconPosition: 'end' | 'start' = 'end';
  @Input() disabled = false;
  @Input() paddingReset = false;
  @Output() accordionItemClick = new EventEmitter<string>();

  toggle(): void {
    if (!this.disabled) {
      this.accordionItemClick.emit(this.header);
    }
  }
}
