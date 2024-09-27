import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreacionPartidaPage } from './creacion-partida.page';

describe('CreacionPartidaPage', () => {
  let component: CreacionPartidaPage;
  let fixture: ComponentFixture<CreacionPartidaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionPartidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
