import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

import {AdoptionForm} from '../shared/adoption-form.model';
import {VolunteerForm} from '../shared/volunteer-form.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  adoptionFormsCollection: AngularFirestoreCollection;
  adoptionForms = new Observable<AdoptionForm[]>();

  constructor(
    private afs: AngularFirestore
  ) {
    this.adoptionFormsCollection = this.afs.collection('adoption-forms');
    this.adoptionForms = this.adoptionFormsCollection.valueChanges() as Observable<AdoptionForm[]>;
  }

  submitAdoptionForm(adoptionForm: AdoptionForm): void {
    this.afs.collection('adoption-forms').add(adoptionForm);
  }

  submitVolunteerForm(form: VolunteerForm): void {
    this.afs.collection('volunteer-forms').add(form);
  }

}

