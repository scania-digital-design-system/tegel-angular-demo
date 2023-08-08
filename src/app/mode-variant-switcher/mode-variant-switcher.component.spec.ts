import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeVariantSwitcherComponent } from './mode-variant-switcher.component';

describe('ModeVariantSwitcherComponent', () => {
  let component: ModeVariantSwitcherComponent;
  let fixture: ComponentFixture<ModeVariantSwitcherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModeVariantSwitcherComponent]
    });
    fixture = TestBed.createComponent(ModeVariantSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
