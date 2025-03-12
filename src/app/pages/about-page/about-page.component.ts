import { CommonModule, DOCUMENT, NgIf } from '@angular/common';
import {  Component, inject } from '@angular/core';
import { TegelModule } from '@scania/tegel-angular';
import { combineLatest, filter, fromEvent, scan, startWith } from 'rxjs';

@Component({
  selector: 'app-about-page',
  standalone: true,
  templateUrl: './about-page.component.html',
  imports: [
    TegelModule,
    NgIf,
    CommonModule
  ]
})
export default class AboutPageComponent {

  private readonly document: Document = inject(DOCUMENT);

  // Med en keydown-listener på 'x' togglar vi en boolean
  private readonly user$ = fromEvent<KeyboardEvent>(this.document, 'keydown').pipe(
    filter((e: KeyboardEvent) => e.key === 'x'),
    startWith(undefined),
    scan((acc: boolean) => !acc, false),
  );

  // Bygg ett enkelt "view model"-objekt som kan ha fler egenskaper om behövs
  readonly vm$ = combineLatest({
    user: this.user$,
  });
}
