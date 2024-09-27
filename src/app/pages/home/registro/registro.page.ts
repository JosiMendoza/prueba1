import { Component, OnInit,ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController,IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  ngOnInit() {
  }
  registrarse:any={
    usuario:"",
    correo:"",
    password:""
     
  };

  field:string="";
  constructor(public router: Router, public toastController:ToastController) { }
 
  validateModel(model:any){
    for(var [key,value] of Object.entries(model)){
      if(value == ""){
        this.field = key;
        return false;
      }
    }
    return true;
   }
  
   async presentToast(position: 'top'|'middle'|'bottom', msg:string, duration?:number){
    const toast = await this.toastController.create({
      message: msg,
      duration: duration?duration:2500,
      position: position,
    });
  
    await toast.present();
   }


   registrar(){
    if(this.validateModel(this.registrarse)){
      let navigationExtras : NavigationExtras ={
        state:{registrarse: this.registrarse}
      };
      this.router.navigate(['/login'], navigationExtras);
      
    }else{
      this.presentToast("middle","Favor de rellenar espacio: "+this.field)
    }
  } 
}
