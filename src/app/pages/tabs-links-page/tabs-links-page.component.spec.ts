import { ComponentFixture, TestBed } from '@angular/core/testing';

import  TabsLinksPageComponent  from './tabs-links-page.component';

describe('TabsLinksPageComponent', () => {
  let component: TabsLinksPageComponent;
  let fixture: ComponentFixture<TabsLinksPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabsLinksPageComponent]
    });
    fixture = TestBed.createComponent(TabsLinksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
