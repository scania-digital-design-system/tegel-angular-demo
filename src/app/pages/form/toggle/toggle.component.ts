import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {TegelModule} from "@scania/tegel-angular";

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TegelModule],
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent {
 @Input() toggleGroup: FormGroup;
}
