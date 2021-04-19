import {Injectable} from '@angular/core';
import {VolunteerForm} from '../shared/volunteer-form.model';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  constructor(
    private afs: AngularFirestore
  ) {
  }
  submitVolunteerForm(form: VolunteerForm): void {
   this.afs.collection('volunteer-forms').add(form);
  }
}

