import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperExampleComponent } from './stepper-example.component';

describe('StepperExampleComponent', () => {
  let component: StepperExampleComponent;
  let fixture: ComponentFixture<StepperExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepperExampleComponent]
    });
    fixture = TestBed.createComponent(StepperExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
