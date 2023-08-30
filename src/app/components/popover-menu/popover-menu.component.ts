import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popover-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popover-menu.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export default class PopoverMenuComponent {}
