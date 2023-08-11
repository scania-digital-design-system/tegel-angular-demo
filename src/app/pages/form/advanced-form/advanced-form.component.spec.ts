import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedFormComponent } from './advanced-form.component';

describe('AdvancedFormComponent', () => {
  let component: AdvancedFormComponent;
  let fixture: ComponentFixture<AdvancedFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvancedFormComponent]
    });
    fixture = TestBed.createComponent(AdvancedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
