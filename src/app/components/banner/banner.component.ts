import { Component,  ElementRef, ViewChild } from '@angular/core';
import { TegelModule } from '@scania/tegel-angular';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  standalone: true,
  imports: [TegelModule] 
})
export class BannerComponent {
  bannerVisibility: boolean = true;

  @ViewChild('defaultBanner', { static: true }) defaultBannerRef: ElementRef<HTMLTdsBannerElement>;
  @ViewChild('errorBanner', { static: true }) errorBanner: ElementRef<HTMLTdsBannerElement>;
  @ViewChild('informationBanner', { static: true }) informationBanner: ElementRef<HTMLTdsBannerElement>;

  handleBannerVisibility() {
    const defaultBannerElement = this.defaultBannerRef?.nativeElement;
    const errorBannerElement = this.errorBanner?.nativeElement;
    const informationBannerElement = this.informationBanner?.nativeElement;

    if (this.bannerVisibility) {
      defaultBannerElement.hideBanner();
      errorBannerElement.hideBanner();
      informationBannerElement.hideBanner();
      this.bannerVisibility = false;
    } else {
      defaultBannerElement.showBanner();
      errorBannerElement.showBanner();
      informationBannerElement.showBanner();
      this.bannerVisibility = true;
    }
  }

  handleClose(event: Event) {
    event.preventDefault();
  }
}
