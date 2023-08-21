import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-toggle',
  standalone: true,
  template: `
    <h2 class="tds-headline-02 tds-u-pb1">Toggle</h2>
    <tds-toggle
      toggle-id="example-toggle"
      headline="Test this toggle, observe Console for results"
      size="lg"
      #toggleComponent
    >
      <div slot="label">Click on me!</div>
    </tds-toggle>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ToggleComponent implements AfterViewInit {
  @ViewChild('toggleComponent', { static: true }) toggleComponent: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    const webComponent = this.toggleComponent.nativeElement;

    this.renderer.listen(webComponent, 'tdsToggle', (event) => {
      console.log('tdsToggle event received', event.detail);
    });
  }
}
