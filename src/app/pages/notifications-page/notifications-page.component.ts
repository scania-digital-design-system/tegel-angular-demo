import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { UserStoreService } from 'src/app/services/user-store.service';
import { Notification } from 'src/types';

@Component({
  selector: 'app-notifications-page',
  standalone: true,
  templateUrl: './notifications-page.component.html',
  styleUrls: ['./notifications-page.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule]
})
export default class NotificationsPageComponent implements OnInit, OnDestroy {
  constructor(private userStoreService: UserStoreService) {}
  private onDestroy$: Subject<void> = new Subject<void>();
  @ViewChild('notificationsModal', { static: true }) notificationsModal: ElementRef<HTMLTdsModalElement> | undefined;

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

  openModal(){
    this.notificationsModal?.nativeElement.showModal()
  }

  clearNotifications(){
    if(this.notificationsModal){
      this.notificationsModal.nativeElement.closeModal();
      this.userStoreService.clearNotifications()
    }
  }
}
