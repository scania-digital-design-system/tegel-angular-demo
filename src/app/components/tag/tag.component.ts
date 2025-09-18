<<<<<<< Updated upstream
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
=======
import { Component, Input } from '@angular/core';
>>>>>>> Stashed changes
import { TegelModule } from '@scania/tegel-angular';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
<<<<<<< Updated upstream
  standalone: true,
  imports: [CommonModule, TegelModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TagComponent {
  // Example tag data for demonstration
  tags = [
    { text: 'Success', variant: 'Success', size: 'lg' },
    { text: 'Warning', variant: 'Warning', size: 'lg' },
    { text: 'New', variant: 'New', size: 'lg' },
    { text: 'Neutral', variant: 'Neutral', size: 'lg' },
    { text: 'Information', variant: 'Information', size: 'lg' },
    { text: 'Error', variant: 'Error', size: 'lg' },
    { text: 'Small Success', variant: 'Success', size: 'sm' },
    { text: 'Small Warning', variant: 'Warning', size: 'sm' },
    { text: 'Small New', variant: 'New', size: 'sm' },
    { text: 'Small Neutral', variant: 'Neutral', size: 'sm' },
    { text: 'Small Information', variant: 'Information', size: 'sm' },
    { text: 'Small Error', variant: 'Error', size: 'sm' },
  ];

  // Tag with prefix slot example
  tagWithIcon = {
    text: 'With Icon',
    variant: 'Success' as const,
    size: 'lg' as const,
  };
=======
  styleUrls: ['./tag.component.css'],
  standalone: true,
  imports: [TegelModule],
})
export class TagComponent {
  @Input() text: string = 'Tag';
  @Input() size: 'lg' | 'sm' = 'lg';
  @Input() variant: 'Success' | 'Warning' | 'New' | 'Neutral' | 'Information' | 'Error' = 'Neutral';
>>>>>>> Stashed changes
}
