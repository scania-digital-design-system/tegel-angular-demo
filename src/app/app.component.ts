import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [
        HeaderComponent,
        RouterOutlet,
        FooterComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppComponent {
  title = 'tegel-angular-demo';
}
