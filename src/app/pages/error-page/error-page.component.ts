import {  Component } from '@angular/core';
import { TegelModule } from '@scania/tegel-angular';

@Component({
    selector: 'app-error-page',
    templateUrl: './error-page.component.html',
    styleUrls: ['./error-page.component.css'],
    standalone: true,
    imports: [
        TegelModule
    ]

})
export default class ErrorPageComponent {

}
