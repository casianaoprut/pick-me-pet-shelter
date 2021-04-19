import { Injectable } from '@angular/core';
import {AdoptionForm} from '../shared/adoption-form.model';
import {AngularFirestore} from '@angular/fire/firestore';

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

}
