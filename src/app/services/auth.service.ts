import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = {} as User;
  constructor(private afAuth: AngularFireAuth, private router: Router) { }

    
  isAuth(): Observable<any> {
    return this.afAuth.authState; 
  }

  getUser() {
    return this.afAuth.currentUser; 
  }



  logout() {
    return this.afAuth.signOut();
  }
}
