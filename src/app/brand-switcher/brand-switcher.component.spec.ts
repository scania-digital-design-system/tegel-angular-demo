import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandSwitcherComponent } from './brand-switcher.component';

describe('BrandSwitcherComponent', () => {
  let component: BrandSwitcherComponent;
  let fixture: ComponentFixture<BrandSwitcherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandSwitcherComponent],
    });
    fixture = TestBed.createComponent(BrandSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
