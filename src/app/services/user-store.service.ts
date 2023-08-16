import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserStoreService {
  readonly userNameSubject = new BehaviorSubject<string>('Marcus Åström');
  userName$ = this.userNameSubject.asObservable();

  readonly placeOfWorkSubject = new BehaviorSubject<string>('IXI');
  placeOfWork$ = this.placeOfWorkSubject.asObservable();

  readonly notificationsSubject = new BehaviorSubject<
    {
      notification: string;
      type: 'error' | 'success' | 'information' | 'warning';
    }[]
  >([
    {
      notification: 'You need to update your username.',
      type: 'error',
    },
    {
      notification: 'Your vacation request has been approved.',
      type: 'success',
    },
    {
      notification: 'You need to update your password.',
      type: 'error',
    },
    {
      notification: 'Your username is about to expire.',
      type: 'warning',
    },
  ]);
  notifications$ = this.notificationsSubject.asObservable();

  constructor() { }

  updateUserName(userName: string) {
    this.userNameSubject.next(userName);
  }

  updatePlaceOfWork(placeOfWork: string) {
    this.placeOfWorkSubject.next(placeOfWork);
  }

  clearNotifications() {
    this.notificationsSubject.next([]);
  }
}
