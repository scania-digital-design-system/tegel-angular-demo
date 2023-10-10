import {  Component } from '@angular/core';
import { TegelModule } from '@scania/tegel-angular';

@Component({
  selector: 'app-datetime',
  standalone: true,
  templateUrl: './datetime.component.html',
  imports: [ TegelModule]
})
export default class DatetimeComponent {}
