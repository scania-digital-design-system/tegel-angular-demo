import {Component, Input} from '@angular/core';
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {TegelModule} from "@scania/tegel-angular";

@Component({
  selector: 'app-chip',
  standalone: true,
  templateUrl: './chip.component.html',
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    TegelModule
  ],
  styleUrls: ['./chip.component.css']
})
export class ChipComponent {
  @Input() chipGroup: FormGroup;
}
