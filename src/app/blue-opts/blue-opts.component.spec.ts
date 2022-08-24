import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueOptsComponent } from './blue-opts.component';

describe('BlueOptsComponent', () => {
  let component: BlueOptsComponent;
  let fixture: ComponentFixture<BlueOptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlueOptsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlueOptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
