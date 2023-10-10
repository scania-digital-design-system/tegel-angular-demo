import { CommonModule } from '@angular/common';
import {
  
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { TegelModule } from '@scania/tegel-angular';
import { Subject, takeUntil } from 'rxjs';
import { UserStoreService } from 'src/app/services/user-store.service';
import { Notification } from 'src/types';

@Component({
  selector: 'app-notifications-page',
  standalone: true,
  templateUrl: './notifications-page.component.html',
  imports: [CommonModule, TegelModule],
})
export default class NotificationsPageComponent implements OnInit, OnDestroy {
  constructor(private userStoreService: UserStoreService) {}
  private onDestroy$: Subject<void> = new Subject<void>();
  @ViewChild('notificationsModal', { static: true }) notificationsModal: HTMLTdsModalElement;

  notifications: Notification[];

  ngOnInit() {
    this.userStoreService.notifications$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((notifications) => {
        this.notifications = notifications;
      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  openModal() {
    this.notificationsModal.showModal();
  }

  clearNotifications() {
    if (this.notificationsModal) {
      this.notificationsModal.closeModal();
      this.userStoreService.clearNotifications();
    }
  }
}
