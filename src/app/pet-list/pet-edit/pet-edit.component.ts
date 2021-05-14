import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {PetService} from '../pet.service';

import firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;
import {AngularFireStorage} from '@angular/fire/storage';

import {Pet} from '../../shared/models/pet.model';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit, OnDestroy {

  @Output() closePetEdit = new EventEmitter<void>();
  @Input() editMode = false;
  @Input() pet: Pet = {
    name: '',
    breed: '',
    description: '',
    photoURL: '',
    addedDate: Timestamp.now(),
    birthDate: Timestamp.now(),
    gender: '',
    adopted: false
  };
  petBirthDate: Date | null = null;
  yearRange = new Date().getFullYear();
  genders = ['male', 'female'];
  showUploader = false;
  photoURL = '';
  photoPath = '';
  storageSubscription = new Subscription();
  urlSubscription = new Subscription();

  constructor(
    private router: Router,
    private petService: PetService,
    private storage: AngularFireStorage
  ) { }

  ngOnDestroy(): void {
    this.urlSubscription.unsubscribe();
    this.storageSubscription.unsubscribe();
  }

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
    if (this.photoPath !== ''){
      this.storage.ref(this.photoPath).delete();
    }
    const file = event.files[0] as File;
    const path = `pets/${file.name}_${Date.now()}`;
    console.log(path);
    this.storageSubscription = this.storage.upload(path, file)
      .snapshotChanges()
      .subscribe( (result) => {
        if (result?.state === 'success') {
          this.urlSubscription = this.storage.ref(path)
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
    if (this.editMode){
      this.onEditPet();
    } else {
      this.onCreatePet();
    }
    form.reset();
  }

  onEditPet(): void {
    const birthDate = this.petBirthDate ? this.petBirthDate : new Date();
    console.log('onEdit: ' + this.pet.photoPath + ' .local path:' + this.photoPath);
    if (this.photoPath !== '' && this.pet.photoPath !== '') {
      if (this.pet.photoPath) {
        this.storage.ref(this.pet.photoPath).delete();
      }
    }
    const pet = {
      ...this.pet,
      photoPath: this.photoPath,
      photoURL: this.photoURL === '' ? this.pet.photoURL : this.photoURL,
      birthDate: Timestamp.fromDate(birthDate)
    };
    this.petService.editPet(pet).then(() => {
      this.photoURL = '';
      this.photoPath = '';
      this.onClose();
    });
  }

  onCreatePet(): void{
    const birthDate = this.petBirthDate ? this.petBirthDate : new Date();
    const pet = {
      ...this.pet,
      photoURL: this.photoURL,
      photoPath: this.photoPath,
      addedDate: Timestamp.now(),
      birthDate: Timestamp.fromDate(birthDate),
      adopted: false
    };
    this.petService.addPet(pet).then(() => {
      this.photoURL = '';
      this.photoPath = '';
      this.onClose();
    });
  }
}
