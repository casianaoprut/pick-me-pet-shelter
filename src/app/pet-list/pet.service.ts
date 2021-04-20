import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';

import {map} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';

import {Pet} from '../shared/pet.model';


@Injectable({
  providedIn: 'root'
})
export class PetService{

  editMode = new Subject<boolean>();
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

  getPet(petId: string): Observable<Pet>{
    const docRef: AngularFirestoreDocument = this.petsCollection.doc<Pet>(petId);
    return docRef.valueChanges() as Observable<Pet>;
  }

  public getAge(pet: Pet): number{
    const currentDate = new Date();
    const petBirthDate = pet.birthDate.toDate();
    let age = (new Date()).getFullYear() - petBirthDate.getFullYear();
    if (currentDate.getMonth() < petBirthDate.getMonth()){
      age--;
    } else {
      if ( currentDate.getMonth() === petBirthDate.getMonth() ){
        if (currentDate.getDay() < petBirthDate.getDay()) {
          age--;
        }
      }
    }
    return age;
  }

  deletePet(pet: Pet): void{
    const petRef: AngularFirestoreDocument<Pet> = this.afs.doc(`pets/${pet.id}`);
    petRef.delete();
  }

}
