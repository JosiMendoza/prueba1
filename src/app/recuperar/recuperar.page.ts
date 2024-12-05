import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
  e: FormGroup;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private loadingCtrl: LoadingController,
    private toastController: ToastController
  ) {
    // Inicialización del formulario
    this.e = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {}

  async resetPassword() {
    if (!this.e.valid) {
      this.showToast('Por favor, ingresa un correo válido.');
      return;
    }

    const email = this.e.value.email;

    const loading = await this.loadingCtrl.create({
      message: 'Enviando correo...',
    });
    await loading.present();

    this.afAuth
      .sendPasswordResetEmail(email)
      .then(() => {
        loading.dismiss();
        this.showToast('Correo de recuperación enviado exitosamente.');
      })
      .catch((error) => {
        loading.dismiss();
        this.showToast('Ocurrió un error al enviar el correo.');
      });
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      position: 'bottom',
    });
    toast.present();
  }
}
