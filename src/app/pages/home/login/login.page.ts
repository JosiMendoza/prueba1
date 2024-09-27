import { Component, OnInit,ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController,IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { FormsModule, FormGroup, FormControl,Validator,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {



  login:any={
    usuario:"",
    password:""
  }
  registro:any={

  }

  recuperar:any={
    correo:""
  }

 

  field:string="";
  constructor(public router: Router, public toastController:ToastController, public fb: FormBuilder) { }


  ngOnInit() {
    console.log('LoginPage ngOnInit');
  }

  ngOnDestroy(){
    console.log('LoginPage ngOnDestroy');
  }

  ionViewWillEnter(){
    console.log('LoginPage ionViewWillEnter');
  }

  ionViewDidEnter(){
    console.log('LoginPage ionViewDidEnter');
  }

  ionViewWillLeave(){
    console.log('LoginPage ionViewWillLeave');
  }

  ionViewDidLeave(){
    console.log('LoginPage ionViewDidLeave');
  }

  
  ingresar(){
    if(this.validateModel(this.login)){
      let navigationExtras : NavigationExtras ={
        state:{login: this.login}
      };
      this.router.navigate(['/home'], navigationExtras);
      
    }else{
      this.presentToast("middle","Favor de rellenar espacio: "+this.field)
    }
  }
  
  registarse(){
    let navigationExtras : NavigationExtras ={
      state :{registro: this.registro}
    }
    this.router.navigate(['/registro'], navigationExtras);
  }

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

/////////////
  @ViewChild(IonModal)
  modal!: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
 

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    if(this.validateModel(this.recuperar)){
      let navigationExtras : NavigationExtras ={
        state:{recuperar: this.recuperar}
      };
      this.modal.dismiss(this.recuperar, 'confirm');
      
    }else{
      this.presentToast("middle","Favor de rellenar espacio: "+this.field)
    }
    
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
  
}

