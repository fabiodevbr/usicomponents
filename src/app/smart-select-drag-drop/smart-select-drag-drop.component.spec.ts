import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartSelectDragDropComponent } from './smart-select-drag-drop.component';

describe('SmartSelectDragDropComponent', () => {
  let component: SmartSelectDragDropComponent;
  let fixture: ComponentFixture<SmartSelectDragDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartSelectDragDropComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartSelectDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
