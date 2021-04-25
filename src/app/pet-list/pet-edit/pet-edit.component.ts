import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {PetService} from '../pet.service';

import firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;
import {AngularFireStorage} from '@angular/fire/storage';

import {Pet} from '../../shared/pet.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {

  @Output() closePetEdit = new EventEmitter<void>();
  @Input() pet: Pet = {
    name: '',
    breed: '',
    description: '',
    photoURL: '',
    addedDate: Timestamp.now(),
    birthDate: Timestamp.now(),
    gender: ''
  };
  petBirthDate: Date | null = null;
  yearRange = new Date().getFullYear();
  genders = ['male', 'female'];
  showUploader = false;
  photoURL = '';
  photoPath = '';

  constructor(
    private router: Router,
    private petService: PetService,
    private storage: AngularFireStorage
  ) { }

  ngOnInit(): void {
    if (this.pet.name !== ''){
      this.petBirthDate = this.pet.birthDate.toDate();
      this.photoURL = this.pet.photoURL;
    }
    if ( this.pet.photoURL === ''){
      this.showUploader = true;
    }
  }

  onClose(): void{
    if (this.photoPath !== ''){
      this.storage.ref(this.photoPath).delete();
    }
    this.closePetEdit.emit();
  }

  onHandleUploader(): void{
    this.showUploader = !this.showUploader;
  }


  async onUpload(event: any): Promise<void> {
    const file = event.files[0] as File;
    const path = `pets/${file.name}_${Date.now()}`;
    this.storage.upload(path, file)
      .snapshotChanges()
      .subscribe( (result) => {
          if (result?.state === 'success') {
            this.storage.ref(path)
              .getDownloadURL()
              .subscribe(rez => {
                this.photoURL = rez;
                this.photoPath = path;
                this.onHandleUploader();
              });
          }
        }
      );
  }

  onSubmit(form: NgForm): void{
    const birthDate = this.petBirthDate !== null ? this.petBirthDate : new Date();
    if (this.pet.photoURL !== ''){
      this.pet = {
        ...this.pet,
        photoURL: this.photoURL !== '' ? this.photoURL : this.pet.photoURL,
        birthDate: Timestamp.fromDate(birthDate)
      };
      this.petService.editPet(this.pet).then(() => {
        this.photoURL = '';
        this.photoPath = '';
        this.onClose();
      });
    } else {
      this.pet = {
        ...this.pet,
        photoURL: this.photoURL,
        addedDate: Timestamp.now(),
        birthDate: Timestamp.fromDate(birthDate)
      };
      this.petService.addPet(this.pet).then(() => {
        this.photoURL = '';
        this.photoPath = '';
        this.onClose();
      });
    }
    form.reset();
  }

}
