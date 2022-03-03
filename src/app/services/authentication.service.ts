import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';

import { AngularFirestore } from "@angular/fire/compat/firestore";
import { authState } from 'rxfire/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private auth: Auth, private afAuth: AngularFirestore) {}

  currentUser$ = authState(this.auth);


  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }  
  // Auth logic to run auth providers
  async AuthLogin(provider: any) {
    try {
      const result = await signInWithPopup(this.auth, provider);
      console.log('You have been successfully logged in!');
    } catch (error) {
      console.log(error);
    }
  }

  login(password: string, email: string) {
    return from(signInWithEmailAndPassword(this.auth, password, email));
  }

  signUp(email: string, password: string) {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }

  logout() {
    return from(this.auth.signOut());
  }
}
