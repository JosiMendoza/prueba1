import { Component, OnInit } from '@angular/core';
import { BdlocalService } from '../services/bdlocal.service';


@Component({
  selector: 'app-partidas-guardadas',
  templateUrl: './partidas-guardadas.page.html',
  styleUrls: ['./partidas-guardadas.page.scss'],
})
export class PartidasGuardadasPage implements OnInit {
  partidasRegistradas: any =[];
  nombrePartida!: string;
  numeroJugadores!: number;

  constructor(private dbLocalService:BdlocalService) { }

  ngOnInit() {
    this.cargarPartidas();
  }
  cargarPartidas(){
    this.partidasRegistradas =(this.dbLocalService.mostrarBD());
    console.log(this.partidasRegistradas);
  }
 borrarBD(){
  this.dbLocalService.borrarBD();
  this.partidasRegistradas =(this.dbLocalService.mostrarBD());
 }
}
