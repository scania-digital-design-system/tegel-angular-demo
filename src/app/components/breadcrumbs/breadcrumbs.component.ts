import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { unslugify } from 'src/utils';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css'],
  imports: [RouterLink, RouterOutlet, CommonModule],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BreadcrumbsComponent {
  segments: Array<{ title: string; path: string }> = []; // Initialize an empty array

  constructor(private route: ActivatedRoute, private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.url = event.url;
        this.segments = this.generateSegments(this.url); // Initialize segments array here
        console.log(this.segments);
      });
  }

  generateSegments = (pathname: string): Array<{ title: string; path: string }> => {
    const segmentStrings = pathname.split('/').filter(Boolean);

    const segmentObjects: Array<{ title: string; path: string }> = segmentStrings.map(
      (segmentStr, idx) => ({
        title: unslugify(segmentStr),
        path: '/' + segmentStrings.slice(0, idx + 1).join('/'),
      }),
    );

    return [{ title: 'Home', path: '/' }].concat(segmentObjects);
  };

  url: string;
}