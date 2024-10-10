import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PartidasGuardadasPage } from './partidas-guardadas.page';

describe('PartidasGuardadasPage', () => {
  let component: PartidasGuardadasPage;
  let fixture: ComponentFixture<PartidasGuardadasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidasGuardadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
