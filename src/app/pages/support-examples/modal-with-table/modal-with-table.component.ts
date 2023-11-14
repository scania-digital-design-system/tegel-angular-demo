import { Component } from '@angular/core';
import { TegelModule } from '@scania/tegel-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-with-table',
  templateUrl: './modal-with-table.component.html',
  standalone: true,
  imports: [TegelModule, CommonModule],
})
export default class ModalWithTableComponent {}
