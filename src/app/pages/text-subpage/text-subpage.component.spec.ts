import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSubpageComponent } from './text-subpage.component';

describe('TextSubpageComponent', () => {
  let component: TextSubpageComponent;
  let fixture: ComponentFixture<TextSubpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextSubpageComponent]
    });
    fixture = TestBed.createComponent(TextSubpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
