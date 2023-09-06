import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsComponent } from './chips.component';

describe('ChipsPageComponent', () => {
  let component: ChipsPageComponent;
  let fixture: ComponentFixture<ChipsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChipsPageComponent],
    });
    fixture = TestBed.createComponent(ChipsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
