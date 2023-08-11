import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccordionComponent } from '../../components/accordion/accordion.component';
import { BadgeComponent } from 'src/app/components/badge/badge.component';
import { BannerComponent } from 'src/app/components/banner/banner.component';
import { BlockComponent } from 'src/app/components/block/block.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { CheckboxComponent } from 'src/app/components/checkbox/checkbox.component';
import { CardComponent } from 'src/app/components/card/card.component';
import BreadcrumbsComponent from '@components/breadcrumbs/breadcrumbs.component';

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
        BreadcrumbsComponent,
        CheckboxComponent,
        CardComponent,
        FormsModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export default class ComponentsComponent {}
