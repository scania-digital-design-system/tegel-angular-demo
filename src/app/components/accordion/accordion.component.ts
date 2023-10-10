import {  Component, Output, EventEmitter } from '@angular/core';
import { TegelModule } from '@scania/tegel-angular';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  standalone: true,
  imports: [TegelModule]
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

    console.log(`Accordion item ${item} is toggled!`);
  }

  handleIconPositionChange(newPosition: 'end' | 'start'): void {
    this.iconPosition = newPosition;
    this.iconPositionChange.emit(newPosition);
  }

  handlePaddingResetToggle(event: Event): void {
    const detail = (event as CustomEvent).detail as { checked: boolean };
    this.paddingReset = detail.checked;
  }

  handleAccordionToggle(event: Event): void {
    const detail = (event as CustomEvent).detail as { checked: boolean };
    this.checkboxState = detail.checked;
  }
}
