import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
    selector: 'app-error-page',
    templateUrl: './error-page.component.html',
    styleUrls: ['./error-page.component.css'],
    standalone: true,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export default class ErrorPageComponent {

}
