import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popover-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popover-menu.component.html',
  styleUrls: ['./popover-menu.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export default class PopoverMenuComponent {

  toggleMenu = false;

  @ViewChild('popoverMenu1', { static: true }) 
  popoverMenu1!: ElementRef<HTMLElement>;
  @ViewChild('trigger1', { static: true }) 
  trigger1: ElementRef<HTMLElement>;

  this.popovermenu1.referenceEl = trigger1;

  

}
