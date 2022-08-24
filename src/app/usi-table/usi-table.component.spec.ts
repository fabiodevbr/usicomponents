import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsiTableComponent } from './usi-table.component';

describe('UsiTableComponent', () => {
  let component: UsiTableComponent;
  let fixture: ComponentFixture<UsiTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsiTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsiTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
