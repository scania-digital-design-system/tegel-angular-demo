import { Component } from '@angular/core';
import { TegelModule } from '@scania/tegel-angular';

@Component({
  selector: 'app-datetime',
  standalone: true,
  templateUrl: './datetime.component.html',
  imports: [TegelModule],
})
export default class DatetimeComponent {
  protected readonly event = event;

  handleDatetimeChange(event: any) {
    console.log('Selected value is:' + event.target.value);
  }
}
