import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueBadgeTitleComponent } from './blue-badge-title.component';

describe('BlueBadgeTitleComponent', () => {
  let component: BlueBadgeTitleComponent;
  let fixture: ComponentFixture<BlueBadgeTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlueBadgeTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlueBadgeTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
