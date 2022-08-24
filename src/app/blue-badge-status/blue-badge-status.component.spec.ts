import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueBadgeStatusComponent } from './blue-badge-status.component';

describe('BlueBadgeStatusComponent', () => {
  let component: BlueBadgeStatusComponent;
  let fixture: ComponentFixture<BlueBadgeStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlueBadgeStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlueBadgeStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
