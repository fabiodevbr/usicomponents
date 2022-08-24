import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsiComponentsShowComponent } from './usi-components-show.component';

describe('UsiComponentsShowComponent', () => {
  let component: UsiComponentsShowComponent;
  let fixture: ComponentFixture<UsiComponentsShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsiComponentsShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsiComponentsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
