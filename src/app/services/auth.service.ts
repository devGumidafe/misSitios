import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userUid: any;

  constructor(public afAuth: AngularFireAuth) { }

  // Registro de usuario
  registerUser(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((res) => {
        // El usuario se ha creado correctamente.
      })
      .catch(err => Promise.reject(err));
  }

  loginUser(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Logout de usuario
  logout() {
    this.afAuth.signOut().then(() => {
      // hemos salido
    });
  }

  // La manera recomendada de obtener el usuario actual
  getUserAuth() {
    return this.afAuth.onAuthStateChanged;
  }

}
