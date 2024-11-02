import { Component, OnInit,ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController,IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { FormsModule, FormGroup, FormControl,Validator,FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  field:string="";
  usuario = this.fb.group({
    nombre:["",[Validators.required,Validators.minLength(4),Validators.maxLength(6), letrasValidator()]],
    contraseña:["",[Validators.required,Validators.minLength(8),Validators.maxLength(14)]],
    correo:["",[Validators.email]]
  })
  constructor(public router: Router, public toastController:ToastController, public fb: FormBuilder, private authService: AuthService) { }



  recuperar = this.fb.group({
    correo:["",[Validators.required,Validators.email]]
  })

 

  
  

////////////////
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

//////////////////////
  iniciarSesion(){
    if(this.usuario.valid){
      this.authService.setToken('abc123'); 
      
      let navigationExtras: NavigationExtras={
        state:{loginData:this.usuario.value}
      }
      this.router.navigate(['/home'], navigationExtras);
    }else{
      this.mostrarErrorNombre(this.usuario);
    }

  }
  mostrarErrorNombre(form: FormGroup){
    if (form.get('nombre')?.invalid) {
      const erroresUsuario = form.get('nombre')?.errors;
      if (erroresUsuario?.['required']) {
        this.presentToast('middle', 'El campo Usuario es requerido.');
      } else if (erroresUsuario?.['minlength']) {
        this.presentToast('middle', `El Usuario debe tener al menos ${erroresUsuario['minlength'].requiredLength} caracteres.`);
      } else if (erroresUsuario?.['number']){
        this.presentToast('middle', `El Usuario no debe presentar caracteres numericos.`);
      }else if (erroresUsuario?.['letrasInvalidas']) {
        this.presentToast('middle', 'El Usuario debe contener solo letras.');
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


  registarse(){
      this.router.navigate(['/registro']);
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
    if (this.recuperar.valid) {
      // Aquí puedes agregar la lógica para recuperar la contraseña
      this.modal.dismiss(this.recuperar.value, 'confirm');
      this.presentToast('middle', 'Correo de recuperación enviado.');
    } else {
      this.mostrarErrorNombre(this.recuperar);

    }
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
  
  
}

export function letrasValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const esValido = /^[a-zA-Z]+$/.test(control.value);
    return esValido ? null : { letrasInvalidas: true };
  };
}

