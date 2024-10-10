import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaginaNoEncontradaComponent } from './pagina-no-encontrada.component';

describe('PaginaNoEncontradaComponent', () => {
  let component: PaginaNoEncontradaComponent;
  let fixture: ComponentFixture<PaginaNoEncontradaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaNoEncontradaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaNoEncontradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
