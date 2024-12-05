import { Component, OnInit,ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController,IonModal, LoadingController, NavController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { FormsModule, FormGroup, FormControl,Validator,FormBuilder, Validators } from '@angular/forms';

import { User } from '../models/user.model';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  user = {} as User;

  ngOnInit() {
    console.log('LoginPage ngOnInit');
  }
  
  constructor(public router: Router, public toastController:ToastController, public fb: FormBuilder,
    public loadingCtrl: LoadingController,
    public afAuth: AngularFireAuth,
    public navCtrl: NavController 
  ) { }

  async registracion(user: User) {
    if (this.formValidation()) {
      let loader = await this.loadingCtrl.create({
        message: "Esperar por favor..."
      });
      await loader.present();
  
      try {
        // Intenta crear el usuario en Firebase Auth
        const response = await this.afAuth.createUserWithEmailAndPassword(user.email, user.password);
        console.log('Usuario registrado con éxito', response);
  
        // Si el registro es exitoso, redirige al login
        this.navCtrl.navigateRoot("login");
      } catch (error: any) {
        // Si ocurre un error, muestra el mensaje correspondiente
        console.error('Error al registrar', error);
        let errorMessage = error.message || 'Error desconocido';
  
        if (error.code === 'auth/email-already-in-use') {
          errorMessage = 'El correo electrónico ya está en uso.';
        } else if (error.code === 'auth/invalid-email') {
          errorMessage = 'El correo electrónico no es válido.';
        } else if (error.code === 'auth/weak-password') {
          errorMessage = 'La contraseña es demasiado débil.';
        }
  
        this.showToast(errorMessage);
      }
  
      await loader.dismiss();
    }
  }
  
  formValidation() {
    if (!this.user.email) {
      this.showToast("Ingrese un email");
      return false;
    }
    if (!this.user.password) {
      this.showToast("Ingrese una contraseña");
      return false;
    }
    return true;
  }
  
  showToast(message: string) {
    this.toastController.create({
      message: message,
      duration: 4000
    }).then(toastData => toastData.present());
  }
}  