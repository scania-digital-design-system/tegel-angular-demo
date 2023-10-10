import { CommonModule } from '@angular/common';
import {  Component } from '@angular/core';
import { TegelModule } from '@scania/tegel-angular';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
  imports: [CommonModule, TegelModule]
})
export class CardComponent {

  cardImagePath = "../../../assets/images/card-img.png";

  handleCardClick(event: Event): void {
    console.log(event);
  }
}
