import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsPageComponent } from './notifications-page.component';

describe('NotificationsPageComponent', () => {
  let component: NotificationsPageComponent;
  let fixture: ComponentFixture<NotificationsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationsPageComponent]
    });
    fixture = TestBed.createComponent(NotificationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
