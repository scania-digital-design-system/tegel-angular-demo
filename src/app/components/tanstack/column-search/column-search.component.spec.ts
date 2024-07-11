import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnSearchComponent } from './column-search.component';

describe('ColumnSearchComponent', () => {
  let component: ColumnSearchComponent;
  let fixture: ComponentFixture<ColumnSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColumnSearchComponent],
    });
    fixture = TestBed.createComponent(ColumnSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
