import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Notification } from 'src/types';

@Injectable({ providedIn: 'root' })
export class UserStoreService {
  readonly userNameSubject = new BehaviorSubject<string>('Name Namesson');
  userName$ = this.userNameSubject.asObservable();

  readonly placeOfWorkSubject = new BehaviorSubject<string>('Scania');
  placeOfWork$ = this.placeOfWorkSubject.asObservable();

  readonly notificationsSubject = new BehaviorSubject<Notification[]>([
    {
      content: 'You need to update your username.',
      type: 'error',
    },
    {
      content: 'Your vacation request has been approved.',
      type: 'success',
    },
    {
      content: 'You need to update your password.',
      type: 'error',
    },
    {
      content: 'Your username is about to expire.',
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
