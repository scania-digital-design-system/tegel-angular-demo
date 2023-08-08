import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextPageComponent } from './text-page.component';

describe('TextPageComponent', () => {
  let component: TextPageComponent;
  let fixture: ComponentFixture<TextPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextPageComponent]
    });
    fixture = TestBed.createComponent(TextPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
