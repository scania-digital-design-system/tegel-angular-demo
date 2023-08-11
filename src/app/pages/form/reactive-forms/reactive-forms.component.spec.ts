import { ComponentFixture, TestBed } from '@angular/core/testing';
import ReactiveFormsComponent from '@pages/form/reactive-forms/reactive-forms.component';


describe('ReactiveFormsComponent', () => {
  let component: ReactiveFormsComponent;
  let fixture: ComponentFixture<ReactiveFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveFormsComponent]
    });
    fixture = TestBed.createComponent(ReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
