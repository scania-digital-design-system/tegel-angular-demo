import { Component } from '@angular/core';
import { TegelModule } from '@scania/tegel-angular';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css'],
  standalone: true,
  imports: [TegelModule],
})
export class TagComponent {}
