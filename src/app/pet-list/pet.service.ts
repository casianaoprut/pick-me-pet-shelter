import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';


import {Pet} from '../shared/pet.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PetService{

  petsCollection: AngularFirestoreCollection;
  pets: Observable<Pet[]>;

  constructor(
    private afs: AngularFirestore
  ) {
    this.petsCollection = this.afs.collection('pets');
    this.pets = this.petsCollection.snapshotChanges().pipe( map( changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Pet;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

}
