import { ComponentFixture, TestBed } from '@angular/core/testing';

import PopoverMenuComponent from './popover-menu.component';

describe('PopoverMenuComponent', () => {
  let component: PopoverMenuComponent;
  let fixture: ComponentFixture<PopoverMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PopoverMenuComponent]
    });
    fixture = TestBed.createComponent(PopoverMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
