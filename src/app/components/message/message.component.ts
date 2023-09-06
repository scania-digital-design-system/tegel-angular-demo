import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'app-message',
  standalone: true,
  templateUrl: './message.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
