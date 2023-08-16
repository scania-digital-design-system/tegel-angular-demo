import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { TabsComponentComponent } from '../../components/tabs-component/tabs-component.component';

@Component({
    selector: 'app-page-two',
    templateUrl: './page-two.component.html',
    styleUrls: ['./page-two.component.css'],
    standalone: true,
    imports: [TabsComponentComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export default class PageTwoComponent {}
