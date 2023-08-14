import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BadgeComponent {
  emailCount = 100;

  updateEmailCount(event: any) {
    // Assuming the value is stored as a string in event.target.value
    this.emailCount = +event.target.value; // The + operator converts the string to a number
  }
}
