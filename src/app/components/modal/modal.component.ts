import {  Component, ElementRef, ViewChild } from '@angular/core';
import { TegelModule } from '@scania/tegel-angular';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  imports: [TegelModule]
})
export default class ModalComponent {
  @ViewChild('myHoverModal', { static: true }) hoverModalRef:
    | ElementRef<HTMLTdsModalElement>
    | undefined;
  @ViewChild('myLgModal', { static: true }) myLgModal: ElementRef<HTMLTdsModalElement> | undefined;

  showModal() {
    if (this.hoverModalRef) this.hoverModalRef.nativeElement.showModal();
  }

  hideModal() {
    if (this.myLgModal) this.myLgModal.nativeElement.closeModal();
  }
}
