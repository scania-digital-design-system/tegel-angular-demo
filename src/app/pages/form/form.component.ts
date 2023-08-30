import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import ReactiveFormsComponent from './reactive-forms/reactive-forms.component';
import { RouterModule } from '@angular/router';
import SimpleFormComponent from 'src/app/pages/form/simple-form/simple-form.component';
import BreadcrumbsComponent from '../../navigation/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveFormsComponent,
    BreadcrumbsComponent,
    SimpleFormComponent,
    ReactiveFormsComponent,
    RouterModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export default class FormComponent {}
