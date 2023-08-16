import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFormComponent } from './simple-form.component';

describe('SimpleFormComponent', () => {
  let component: SimpleFormComponent;
  let fixture: ComponentFixture<SimpleFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleFormComponent]
    });
    fixture = TestBed.createComponent(SimpleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
