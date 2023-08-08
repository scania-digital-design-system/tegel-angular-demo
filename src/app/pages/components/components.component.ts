import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccordionComponent } from '../../components/accordion/accordion.component';
import { BadgeComponent } from 'src/app/components/badge/badge.component';
import { BannerComponent } from 'src/app/components/banner/banner.component';
import { BlockComponent } from 'src/app/components/block/block.component';
import { ButtonComponent } from 'src/app/components/button/button.component';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styleUrls: ['./components.component.css'],
    standalone: true,
    imports: [
        AccordionComponent,
        BadgeComponent,
        BannerComponent,
        ButtonComponent,
        BlockComponent,
        FormsModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class ComponentsComponent {}
