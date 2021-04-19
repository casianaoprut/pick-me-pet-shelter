import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

import {AdoptionForm} from '../shared/adoption-form.model';
import {VolunteerForm} from '../shared/volunteer-form.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(
    private afs: AngularFirestore
  ) { }

  submitAdoptionForm(adoptionForm: AdoptionForm): void{
    this.afs.collection('adoption-forms').add(adoptionForm);
  }

  submitVolunteerForm(form: VolunteerForm): void {
   this.afs.collection('volunteer-forms').add(form);
  }
}

