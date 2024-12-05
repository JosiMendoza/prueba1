import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  userEmail: string = ''; // Almacenará el correo del usuario

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getUser().then(user => {
      if (user) {
        this.userEmail = user.email || 'Correo no disponible'; // Asignamos el correo
      } else {
        this.userEmail = 'Usuario no autenticado'; // Si no hay usuario, mostramos un mensaje
      }
    }).catch(error => {
      console.error('Error al obtener el usuario:', error);
      this.userEmail = 'Error al obtener correo';
    });
  }
}

