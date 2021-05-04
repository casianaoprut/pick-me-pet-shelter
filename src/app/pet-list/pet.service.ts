import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';

import {map} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';

import {Pet} from '../shared/pet.model';
import {AngularFireStorage} from '@angular/fire/storage';


@Injectable({
  providedIn: 'root'
})
export class PetService{

  editMode = new Subject<boolean>();
  petsCollection: AngularFirestoreCollection;
  pets: Observable<Pet[]>;
  oldestPetsCollection: AngularFirestoreCollection;
  oldestPets: Observable<Pet[]>;

  constructor(
    private afStorage: AngularFireStorage,
    private afs: AngularFirestore
  ) {
    this.petsCollection = this.afs.collection('pets', ref => {
      return ref.where('adopted', '==', false);
    });
    this.pets = this.petsCollection.snapshotChanges().pipe( map( changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Pet;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
    this.oldestPetsCollection = this.afs.collection('pets', ref => {
      return ref.orderBy('addedDate', 'asc');
    });
    this.oldestPets = this.oldestPetsCollection.snapshotChanges().pipe( map( changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Pet;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getPet(petId: string): Observable<Pet>{
    const docRef: AngularFirestoreDocument = this.petsCollection.doc<Pet>(petId);
    return docRef.valueChanges().pipe(map(pet => {
      return {
        ...pet,
        id: petId
      };
    })) as Observable<Pet>;
  }

  public getAgeInYears(pet: Pet): number{
    const currentDate = new Date();
    const petBirthDate = pet.birthDate.toDate();
    let age = currentDate.getFullYear() - petBirthDate.getFullYear();
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

  public getAgeInMonths(pet: Pet): number{
    const currentDate = new Date();
    const petBirthDate = pet.birthDate.toDate();
    let age;
    if (currentDate.getFullYear() === petBirthDate.getFullYear()){
      age = currentDate.getMonth() - petBirthDate.getMonth();
    } else {
      age = 12 - petBirthDate.getMonth() + currentDate.getMonth();
    }
    if (currentDate.getDay() < petBirthDate.getDay()){
      age--;
    }
    return age;
  }

  deletePet(pet: Pet): void{
    const petRef: AngularFirestoreDocument<Pet> = this.afs.doc(`pets/${pet.id}`);
    petRef.delete();
  }

  addPet(pet: Pet): Promise<any>{
    return this.afs.collection('pets').add(pet);
  }

  editPet(pet: Pet): Promise<void>{
    const petRef: AngularFirestoreDocument<Pet> = this.afs.doc(`pets/${pet.id}`);
    return petRef.set(pet, {merge: true});
  }

  adoptPet(pet: Pet): Promise<void>{
    const petRef: AngularFirestoreDocument<Pet> = this.afs.doc(`pets/${pet.id}`);
    const adoptedPet = {
      ...pet,
      adopted: true
    };
    return petRef.set(adoptedPet, {merge : true});
  }
}
