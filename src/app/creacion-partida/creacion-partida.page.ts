import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Animation, AnimationController, IonCard } from '@ionic/angular';
import {BdlocalService} from '../services/bdlocal.service';

@Component({
  selector: 'app-creacion-partida',
  templateUrl: './creacion-partida.page.html',
  styleUrls: ['./creacion-partida.page.scss'],
})
export class CreacionPartidaPage implements OnInit {

  partidasRegistradas: any = [];
  nombrePartida!: string;
  numeroJugadores!: number;


  ngOnInit() {
    
  }

  

  //usuario?:String;
  niveles:any[]=[
    {id:1,nivel:"Monopoly General"},
    {id:2,nivel:"Clue General"},
    {id:3,nivel:"Magic General"},
    {id:4,nivel:"Yugioh General"},
    {id:5,nivel:"Pokemon General"},
    {id:6,nivel:"Partida General"}
  ]


  login:any;
  constructor(public alertController:AlertController,private dbLocalService: BdlocalService) {}
  
  limpiar(){
    for (var [key, value] of Object.entries(this.partidasRegistradas)) {
      Object.defineProperty(this.partidasRegistradas,key,{value:""})}
    }
   
    mostrar(){
      (this.partidasRegistradas.nombrePartida!="" && this.partidasRegistradas.numeroJugadores!="") && 
      this.presentAlert("Usuario","Nombre de partida es "+this.partidasRegistradas.nombrePartida+" y su numero de participantes es: "+this.partidasRegistradas.numeroJugadores)||
      this.presentAlert("Error","Debe ingresar nombre de la partida y numero de participantes.");
    }
    
    async presentAlert(titulo:string,message:string) {
      const alert = await this.alertController.create({
        header: titulo,
        message: message,
        buttons: ['OK']
      });
    
      await alert.present();
    }

//////////////
guardarPartida(){
  console.log(this.nombrePartida);
  console.log(this.numeroJugadores);
  
  this.dbLocalService.guardarPartidas(this.nombrePartida,this.numeroJugadores);
  this.partidasRegistradas =(this.dbLocalService.mostrarBD());
  console.log(this.partidasRegistradas);

}
eliminarPartida(){
  console.log(this.nombrePartida);    
  this.dbLocalService.eliminarPartida(this.nombrePartida);
  this.partidasRegistradas =(this.dbLocalService.mostrarBD());
 }
}
