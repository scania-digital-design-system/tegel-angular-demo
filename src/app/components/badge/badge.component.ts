import { Component,  Input } from '@angular/core';
import { TegelModule } from '@scania/tegel-angular';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css'],
  standalone: true,
  imports: [TegelModule]
})
export class BadgeComponent {
  emailCount = 100;

  updateEmailCount(event: any) {
    // Assuming the value is stored as a string in event.target.value
    this.emailCount = +event.target.value; // The + operator converts the string to a number
  }
}
