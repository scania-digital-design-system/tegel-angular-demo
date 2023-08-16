import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'app-datetime',
  standalone: true,
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export default class DatetimeComponent {

}
