import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsiLastUpdateComponent } from './usi-last-update.component';

describe('UsiLastUpdateComponent', () => {
  let component: UsiLastUpdateComponent;
  let fixture: ComponentFixture<UsiLastUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsiLastUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsiLastUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
