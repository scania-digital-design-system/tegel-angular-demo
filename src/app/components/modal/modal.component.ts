import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
