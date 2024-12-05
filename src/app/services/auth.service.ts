import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = {} as User;
  constructor(private afAuth: AngularFireAuth, private router: Router) { }


  getUser() {
    return this.afAuth.currentUser; 
  }

  
  isAuth() {
    return this.afAuth.authState; 
  }

  logout() {
    return this.afAuth.signOut();
  }
}
