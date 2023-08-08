import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsButtonsPageComponent } from './tabs-buttons-page.component';

describe('TabsButtonsPageComponent', () => {
  let component: TabsButtonsPageComponent;
  let fixture: ComponentFixture<TabsButtonsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabsButtonsPageComponent]
    });
    fixture = TestBed.createComponent(TabsButtonsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
