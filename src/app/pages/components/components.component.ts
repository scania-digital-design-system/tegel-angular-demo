import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccordionComponent } from '../../components/accordion/accordion.component';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styleUrls: ['./components.component.css'],
    standalone: true,
    imports: [
        AccordionComponent,
        FormsModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class ComponentsComponent {}
