import { Component, OnInit,ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController,IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { FormsModule, FormGroup, FormControl,Validator,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(public router: Router, public toastController:ToastController, public fb: FormBuilder) { }



  registro = this.fb.group({
    nombre:["",[Validators.required,Validators.minLength(4)]],
    correo:["",[Validators.email]],
    contraseña:["",[Validators.required,Validators.minLength(8),Validators.maxLength(14)]],
    
  })

 

  
  

////////////////
  ngOnInit() {
    console.log('LoginPage ngOnInit');
  }

//////////////////////
  registrar(){
    if(this.registro.valid){
      let navigationExtras: NavigationExtras={
        state:{loginData:this.registro.value}
      }
      this.router.navigate(['/login'], navigationExtras);
    }else{
      this.mostrarErrorNombre(this.registro);
    }

  }
  mostrarErrorNombre(form: FormGroup){
    if (form.get('nombre')?.invalid) {
      const erroresUsuario = form.get('nombre')?.errors;
      if (erroresUsuario?.['required']) {
        this.presentToast('middle', 'El campo Usuario es requerido.');
      } else if (erroresUsuario?.['minlength']) {
        this.presentToast('middle', `El Usuario debe tener al menos ${erroresUsuario['minlength'].requiredLength} caracteres.`);
      }
    }

    if (form.get('contraseña')?.invalid) {
      const erroresContraseña = form.get('contraseña')?.errors;
      if (erroresContraseña?.['required']) {
        this.presentToast('middle', 'El campo Contraseña es requerido.');
      } else if (erroresContraseña?.['minlength']) {
        this.presentToast('middle', `La contraseña debe tener al menos ${erroresContraseña['minlength'].requiredLength} caracteres.`);
      } else if (erroresContraseña?.['maxlength']) {
        this.presentToast('middle', `La contraseña debe tener menos de ${erroresContraseña['maxlength'].requiredLength} caracteres.`);
      }
    }

    if (form.get('correo')?.invalid) {
      const erroresCorreo = form.get('correo')?.errors;
      if (erroresCorreo?.['required']) {
        this.presentToast('middle', 'El campo Correo es requerido.');
      } else if (erroresCorreo?.['email']) {
        this.presentToast('middle', 'Por favor introducir @(dominio).com');
      }
    }
  }

  async presentToast(position: 'top'|'middle'|'bottom', msg:string, duration?:number){
    const toast = await this.toastController.create({
      message: msg,
      duration: duration?duration:2500,
      position: position,
    });
  
    await toast.present();
   }
}
