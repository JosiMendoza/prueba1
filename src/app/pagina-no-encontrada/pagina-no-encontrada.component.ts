import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-pagina-no-encontrada',
  templateUrl: './pagina-no-encontrada.component.html',
  styleUrls: ['./pagina-no-encontrada.component.scss'],
})
export class PaginaNoEncontradaComponent  implements OnInit {

  constructor(public router: Router,) { }

  ngOnInit() {}

  regresarLogin(){
    this.router.navigate(['/login']);
  }
}
