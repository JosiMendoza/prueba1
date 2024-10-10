import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ipartidas } from '../interfaces/ipartidas';
import { ToastController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class BdlocalService {

  partidas: ipartidas[]=[];
  private _storage: Storage | null = null;

  constructor(private storage:Storage, private toastController:ToastController) { 
    this.Init();
    this.cargarPartidas();
  }

  async Init(){
   
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async cargarPartidas(){
    const miPartida = await this.storage.get('partidas');
    if (miPartida){
      this.partidas=miPartida;
    }
  }

  guardarPartidas(nombrePartida: string, numeroJugadores: number){
    const existe = this.partidas.find(c => c.strNombrePartida === nombrePartida);
    if(!existe){
      this.partidas.unshift({strNombrePartida:nombrePartida, intNumeroJugadores:numeroJugadores})
      this._storage?.set('partidas', this.partidas);
      this.presentToast("Partida agregada a la lista!")
    }else{
      this.presentToast("La partida deseada ya existe")
    }
  }

  async eliminarPartida(nombre: string){
    const existe=this.partidas.find(c => c.strNombrePartida === nombre);
    if (existe) {
      this.partidas=this.partidas.filter(c=>c.strNombrePartida !== nombre);
      this._storage?.set('partidas', this.partidas);
      this.presentToast("Se ha eliminado la partida");    
    }else{
      this.presentToast("No existe partida con ese nombre");
    }    
  }
  async borrarBD() {
    await this._storage?.clear();
    this.partidas=[];
    console.log(this.partidas.length);
    this.presentToast("Se ha eliminado de la BD"); 
  }

  async presentToast(mensaje:string) {
    const toast = await this.toastController.create({
      message: mensaje,
      translucent:true,
      color:'medium',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

  async mostrarBD(){
    return this.partidas;
    
  }

}
