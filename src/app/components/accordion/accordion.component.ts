import { CUSTOM_ELEMENTS_SCHEMA, Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class AccordionComponent {
  @Output() iconPositionChange = new EventEmitter<'end' | 'start'>();

  expandedItem = '';
  iconPosition: 'end' | 'start' = 'end';
  checkboxState = true;
  paddingReset = false;

  handleAccordionItemClick(item: string): void {
    if (!this.checkboxState) {
      return; // Do nothing if the accordion is disabled
    }

    this.expandedItem = this.expandedItem === item ? '' : item;
  }

  handleIconPositionChange(newPosition: 'end' | 'start'): void {
    this.iconPosition = newPosition;
    this.iconPositionChange.emit(newPosition);
  }
}
