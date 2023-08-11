import {Directive, ViewContainerRef} from '@angular/core'
import {ModalComponent} from '../components/modal/modal.component'

@Directive({
  selector: '[modal-dr]',
  standalone: true,
})
export class ModalDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }

  showModal(content: string)  {
    this.viewContainerRef.clear();
    const { instance } = this.viewContainerRef.createComponent<ModalComponent>(ModalComponent)
    instance.content = content
  }
}
