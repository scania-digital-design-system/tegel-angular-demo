import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'app-settings-page',
  standalone: true,
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export default class SettingsPageComponent {

}
