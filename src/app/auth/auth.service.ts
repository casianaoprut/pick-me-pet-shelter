import { Injectable } from '@angular/core';

import firebase from 'firebase/app';
import 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import {Observable, of} from 'rxjs';

import {User} from '../shared/user.model';
import {map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User | null | undefined>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/` + user.uid).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  async googleSignIn(): Promise<void> {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

   logout(): Promise<void> {
    return this.afAuth.signOut();
  }

  private updateUserData(user: any, displayName?: string, photoURL?: string): Promise<void> {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: displayName ? displayName : user.displayName,
      photoURL: photoURL ? photoURL : user.photoURL,
      roles: user.roles ? user.roles : {customer: true}
    };

    return userRef.set(data, {merge : true});
  }

  async emailAndPasswordSignIn(email: string, password: string, displayName: string, photoURL?: string): Promise<void>{
    return this.afAuth.createUserWithEmailAndPassword(email, password).then( result => {
        this.updateUserData(result.user, displayName, photoURL).catch((error) => {
          window.alert(error.message);
        });
      }
    );
  }

  async emailLogin(email: string, password: string): Promise<void> {
    return this.afAuth.signInWithEmailAndPassword(email, password).then( userResult => {
      this.updateUserData(userResult.user).catch((error) => {
        window.alert(error.message);
      });
    });
  }

  getUserPhoto(uid: string): Observable<string>{
    const userCollection = this.afs.collection('users');
    const docRef: AngularFirestoreDocument = userCollection.doc<User>(uid);
    return docRef.valueChanges().pipe(map( user => {
      if (user !== undefined) {
      return user.photoURL;
      }
      return '';
    }));
  }
}
