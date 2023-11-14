import { Component } from '@angular/core';
import { TegelModule } from '@scania/tegel-angular';
import { CommonModule } from '@angular/common';
import { PaginationTableComponent } from '@pages/support-examples/modal-with-table/table/pagination-table.component';

@Component({
  selector: 'app-modal-with-table',
  templateUrl: './modal-with-table.component.html',
  standalone: true,
  imports: [TegelModule, CommonModule, PaginationTableComponent, PaginationTableComponent],
})
export default class ModalWithTableComponent {}
