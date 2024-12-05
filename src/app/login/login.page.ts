import { Component, OnInit,ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController,IonModal, LoadingController, NavController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { FormsModule, FormGroup, FormControl,Validator,FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthService } from '../services/auth.service';

import { User } from '../models/user.model';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {} as User;

  isModalOpen: boolean = false;

  constructor(public router: Router, public toastController:ToastController, public fb: FormBuilder, 
    public loadingCtrl: LoadingController,
    public afAuth: AngularFireAuth,
    public navCtrl: NavController 
  ) { }
  
  ngOnInit() {
    this.afAuth.authState.subscribe((user) => {
      if (!user) {
        this.router.navigate(['/login']); 
      }
    });
  }
  

async login(user: User){
  if (this.formValidation()){
    let loader = await this.loadingCtrl.create({
      message:"Espere un momento porfavor..."
    });
    await loader.present();

    try {
      await this.afAuth.signInWithEmailAndPassword(user.email, user.password).then(data =>{
        console.log(data);

        this.router.navigate(['/home']);
      })

    }catch (error:any){
      error.message="usuario no registrado";
      let errorMessage = error.message|| error.getLocalizedMessage();

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

////////////////
openModal() {
  this.isModalOpen = true;
}

closeModal() {
  this.isModalOpen = false;
}
 

}

