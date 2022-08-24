import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueTabsComponent } from './blue-tabs.component';

describe('BlueTabsComponent', () => {
  let component: BlueTabsComponent;
  let fixture: ComponentFixture<BlueTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlueTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlueTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
