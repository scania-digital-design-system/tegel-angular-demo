import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { TdsToastCustomEvent } from '@scania/tegel';

@Component({
  selector: 'app-toast',
  standalone: true,
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule]
})
export default class ToastComponent {
  hideToasts: boolean = false;


  toggleToasts(){
    this.hideToasts = !this.hideToasts
  }
  preventClose(event: Event){
    event.preventDefault()
  }
}
