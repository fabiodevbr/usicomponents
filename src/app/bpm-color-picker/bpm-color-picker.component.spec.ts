import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpmColorPickerComponent } from './bpm-color-picker.component';

describe('BpmColorPickerComponent', () => {
  let component: BpmColorPickerComponent;
  let fixture: ComponentFixture<BpmColorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpmColorPickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BpmColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
