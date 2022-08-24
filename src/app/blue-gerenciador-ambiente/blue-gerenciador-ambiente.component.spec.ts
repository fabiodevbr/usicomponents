import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueGerenciadorAmbienteComponent } from './blue-gerenciador-ambiente.component';

describe('BlueGerenciadorAmbienteComponent', () => {
  let component: BlueGerenciadorAmbienteComponent;
  let fixture: ComponentFixture<BlueGerenciadorAmbienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlueGerenciadorAmbienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlueGerenciadorAmbienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
