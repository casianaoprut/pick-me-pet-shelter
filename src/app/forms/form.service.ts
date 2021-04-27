import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

import {AdoptionForm} from '../shared/adoption-form.model';
import {VolunteerForm} from '../shared/volunteer-form.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  pendingAdoptionFormsCollection: AngularFirestoreCollection;
  adoptionForms = new Observable<AdoptionForm[]>();

  constructor(
    private afs: AngularFirestore
  ) {
    this.pendingAdoptionFormsCollection = this.afs.collection('adoption-forms', ref => {
      return ref.where('accepted', '==', false).where('rejected', '==', false);
    });
    this.adoptionForms = this.pendingAdoptionFormsCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as AdoptionForm;
        data.idForm = a.payload.doc.id;
        return data;
      });
    }));
  }

  submitAdoptionForm(adoptionForm: AdoptionForm): void {
    this.afs.collection('adoption-forms').add(adoptionForm);
  }

  submitVolunteerForm(form: VolunteerForm): void {
    this.afs.collection('volunteer-forms').add(form);
  }

  acceptAdoptionForm(form: AdoptionForm): Promise<void>{
    const formRef: AngularFirestoreDocument<AdoptionForm> = this.afs.doc(`adoption-forms/${form.idForm}`);
    const acceptedForm: AdoptionForm = {
      ...form,
      accepted: true,
    };
    return formRef.set(acceptedForm, {merge: true});
  }

  rejectAdoptionForm(form: AdoptionForm): Promise<void>{
    const formRef: AngularFirestoreDocument<AdoptionForm> = this.afs.doc(`adoption-forms/${form.idForm}`);
    const acceptedForm: AdoptionForm = {
      ...form,
      rejected: true,
    };
    return formRef.set(acceptedForm, {merge: true});
  }

  getUserAdoptionForms(userUid: string): Observable<AdoptionForm[]> {
    const userAdoptionForms: AngularFirestoreCollection = this.afs.collection('adoption-forms', ref => {
      return ref.where('userUid', '==', userUid).where('userReview', '==', true);
    });
    return userAdoptionForms.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as AdoptionForm;
        data.idForm = a.payload.doc.id;
        return data;
      });
    }));
  }

  clearUserAdoptionForm(form: AdoptionForm): Promise<void>{
    const formRef: AngularFirestoreDocument<AdoptionForm> = this.afs.doc(`adoption-forms/${form.idForm}`);
    if (form.accepted){
      const acceptedForm: AdoptionForm = {
        ...form,
        userReview: false
      };
      return formRef.set(acceptedForm, {merge : true});
    } else {
      return formRef.delete();
    }
  }

}

