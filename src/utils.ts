import { inject, DestroyRef } from "@angular/core";
import { Subject, takeUntil } from "rxjs";

  export function unslugify(slug: string) {
    const words = slug.replace(/-/g, ' ').split(' ');
    return words.join(' ');
  }

  export function untilDestroyedRef() {
    const subject = new Subject();

    inject(DestroyRef).onDestroy(() => {
      subject.next(true);
      subject.complete();

    });

    return <T>() => takeUntil<T>(subject.asObservable());
  }
