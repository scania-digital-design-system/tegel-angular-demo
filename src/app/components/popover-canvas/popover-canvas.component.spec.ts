import { ComponentFixture, TestBed } from '@angular/core/testing';

import PopoverCanvasComponent from './popover-canvas.component';

describe('PopoverCanvasComponent', () => {
  let component: PopoverCanvasComponent;
  let fixture: ComponentFixture<PopoverCanvasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PopoverCanvasComponent],
    });
    fixture = TestBed.createComponent(PopoverCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
