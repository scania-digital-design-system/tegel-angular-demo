import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    standalone: true,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class FooterComponent {}
