import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Animation, AnimationController, IonCard } from '@ionic/angular';

@Component({
  selector: 'app-creacion-partida',
  templateUrl: './creacion-partida.page.html',
  styleUrls: ['./creacion-partida.page.scss'],
})
export class CreacionPartidaPage implements OnInit {


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
  //Construyo un modelo para limpiar
  data:any={
    nombrePartida:"",
    numParticipante:"",
    juego:"",
    puntos:""
  };
  login:any;
  constructor(public alertController:AlertController,) {}
  
  limpiar(){
    for (var [key, value] of Object.entries(this.data)) {
      Object.defineProperty(this.data,key,{value:""})}
    }
    /**
     * Metodo para mostrar los datos entregados
     */
    mostrar(){
      (this.data.nombrePartida!="" && this.data.numParticipante!="") && 
      this.presentAlert("Usuario","Nombre de partida es "+this.data.nombrePartida+" y su numero de participantes es: "+this.data.numParticipante)||
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

}
