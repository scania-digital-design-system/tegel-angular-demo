import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BannerComponent {
  bannerVisibility: boolean = true;

  @ViewChild('defaultBanner', { static: true }) defaultBannerRef: ElementRef<HTMLTdsBannerElement>;

  handleBannerVisibility() {
    const defaultBannerElement = this.defaultBannerRef?.nativeElement;

    if (this.bannerVisibility) {
      defaultBannerElement.hideBanner();
      this.bannerVisibility = false;
    } else {
      defaultBannerElement.showBanner();
      this.bannerVisibility = true;
    }
  }

  handleClose(event: Event) {
    event.preventDefault();
  }
}
