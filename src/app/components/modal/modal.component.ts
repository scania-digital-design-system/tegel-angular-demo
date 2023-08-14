import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export default class ModalComponent {
  @ViewChild('myHoverModal', { static: true }) hoverModalRef: ElementRef<HTMLTdsModalElement> | undefined;

  

  showModal(event: Event){
    const element = event.target as HTMLTdsModalElement
    element.showModal()
  }

  hideModal(){
    if(this.hoverModalRef)
        this.hoverModalRef.nativeElement.closeModal()
  }
}
