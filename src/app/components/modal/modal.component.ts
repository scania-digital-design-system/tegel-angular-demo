import {  Component, ElementRef, ViewChild } from '@angular/core';
import { TegelModule } from '@scania/tegel-angular';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  imports: [TegelModule]
})
export default class ModalComponent {
  @ViewChild('myHoverModal', { static: true }) hoverModalRef: HTMLTdsModalElement;
  @ViewChild('myLgModal', { static: true }) myLgModal: HTMLTdsModalElement;

  showModal() {
    this.hoverModalRef.showModal();
  }

  hideModal() {
    this.myLgModal.closeModal();
  }
}
