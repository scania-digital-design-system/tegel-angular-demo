import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccordionComponent } from '../../components/accordion/accordion.component';
import { BannerComponent } from 'src/app/banner/banner.component';
import { BadgeComponent } from 'src/app/badge/badge.component';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styleUrls: ['./components.component.css'],
    standalone: true,
    imports: [
        AccordionComponent,
        BannerComponent,
        BadgeComponent,
        FormsModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class ComponentsComponent {}
