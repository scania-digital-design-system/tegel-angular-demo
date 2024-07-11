import { ComponentFixture, TestBed } from '@angular/core/testing';

import TanstackTableComponent from './tanstack-table.component';

describe('TanstackTableComponent', () => {
  let component: TanstackTableComponent;
  let fixture: ComponentFixture<TanstackTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TanstackTableComponent],
    });
    fixture = TestBed.createComponent(TanstackTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
