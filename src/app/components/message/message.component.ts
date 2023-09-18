import {  Component } from '@angular/core';
import { TegelModule } from '@scania/tegel-angular';

@Component({
  selector: 'app-message',
  standalone: true,
  templateUrl: './message.component.html',
  imports: [TegelModule]
})
export default class MessageComponent {
  useIcon = true;
  useMinimal = false;

  handleUseIconToggle(event: any) {
    this.useIcon = event.detail.checked;
  }
  handleUseMinimalToggle(event: any) {
    this.useMinimal = event.detail.checked;
  }
}
