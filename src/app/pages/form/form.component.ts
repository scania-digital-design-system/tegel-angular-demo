import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
} from '@angular/forms';
import { BreadcrumbsComponent } from 'src/app/components/breadcrumbs/breadcrumbs.component';
import { AdvancedFormComponent } from './advanced-form/advanced-form.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdvancedFormComponent,
    BreadcrumbsComponent,
    SimpleFormComponent,
    AdvancedFormComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export default class FormComponent {



}
