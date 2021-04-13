import { Injectable } from '@angular/core';
import {Pet} from '../shared/pet.model';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PetService {
  petsCollection: AngularFirestoreCollection;
  pets: Observable<Pet[]>;
  constructor(private afs: AngularFirestore) {
    this.petsCollection = this.afs.collection('pets');
    this.pets = this.petsCollection.valueChanges() as unknown as Observable<Pet[]>;
  }

}
