import firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;

export interface Pet{
  name: string;
  breed: string;
  description?: string;
  photoURL: string;
  addedDate: Timestamp;
  birthDate: Timestamp;
  gender: string;
  id?: string;
  photoPath?: string;
}
