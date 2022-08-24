import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartselectComponent } from './smartselect.component';

describe('SmartselectComponent', () => {
  let component: SmartselectComponent;
  let fixture: ComponentFixture<SmartselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartselectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
