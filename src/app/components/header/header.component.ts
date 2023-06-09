import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  /* Here are two examples how to check current url to make "selected" prop of <tds-header-item> to work.
   * Please check html file for more info */

  constructor(private router: Router) {}
  isActive(url: string): boolean {
    return this.router.isActive(url, true);
  }

  getCurrentUrl(): string {
    return this.router.url;
  }
}
