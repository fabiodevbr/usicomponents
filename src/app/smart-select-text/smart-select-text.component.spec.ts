import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartSelectTextComponent } from './smart-select-text.component';

describe('SmartSelectTextComponent', () => {
  let component: SmartSelectTextComponent;
  let fixture: ComponentFixture<SmartSelectTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartSelectTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartSelectTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
