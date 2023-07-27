import { Component } from '@angular/core';
import { AccordionComponent } from '../../components/accordion/accordion.component'; 

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styleUrls: ['./components.component.css'],
    standalone: true,
    imports: [
        AccordionComponent,
    ],
})
export class ComponentsComponent {}
