import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BlockComponent {
  modeVariant = 'primary';

  handleVariantChange(event: any) {
    this.modeVariant = event.detail.value;
  }
}
