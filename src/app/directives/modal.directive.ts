import {Directive, ViewContainerRef} from '@angular/core'
import { TableModalComponent } from '@pages/table-page/table-modal.component';

@Directive({
  selector: '[modal-dr]',
  standalone: true,
})
export class ModalDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }

  showModal(content: string)  {
    this.viewContainerRef.clear();
    const { instance } = this.viewContainerRef.createComponent<TableModalComponent>(TableModalComponent)
    instance.content = content
  }
}
