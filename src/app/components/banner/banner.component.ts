import { Component, CUSTOM_ELEMENTS_SCHEMA, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class BannerComponent {
  bannerVisibility = true;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  handleToggle() {
    this.bannerVisibility = !this.bannerVisibility;
    const bannerElement = this.elementRef.nativeElement.querySelector(
      'tds-banner[persistent="true"]'
    );

    if (bannerElement) {
      if (this.bannerVisibility) {
        bannerElement.hideBanner();
      } else {
        bannerElement.showBanner();
      }
    }
  }

  handleClose(event: Event) {
    event.preventDefault();
  }

}
