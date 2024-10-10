import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string = ''; 
  constructor() {}


  setToken(token: string) {
    this.token = token; // Almacena el token
  }


  isAuth(): boolean {
    return this.token.length > 0; 
  }
}
