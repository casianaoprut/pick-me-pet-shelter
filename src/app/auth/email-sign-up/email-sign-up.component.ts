import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {AngularFireStorage} from '@angular/fire/storage';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-email-sign-up',
  templateUrl: './email-sign-up.component.html',
  styleUrls: ['./email-sign-up.component.css']
})
export class EmailSignUpComponent implements OnInit, OnDestroy {

  showUploader = false;
  photoURL = 'https://firebasestorage.googleapis.com/v0/b/pick-me--pet-shelter.appspot.com/o/user.png?alt=media&token=087556eb-24fe-4e08-8d35-a59c24f99cbf';
  photoPath = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private storage: AngularFireStorage,
    private messageService: MessageService
  ) { }

  ngOnDestroy(): void {
    if (this.photoPath !== ''){
      this.storage.ref(this.photoPath).delete();
    }
  }

  ngOnInit(): void {
  }

  onSignUp(form: NgForm): void{
    this.authService.emailAndPasswordSignIn(
      form.value.email,
      form.value.password,
      form.value.displayName,
      this.photoPath !== '' ? this.photoURL : undefined).then(() => {
        this.photoPath = '';
        this.router.navigate(['/home-page']);
      }
    ).catch(error => {
      this.messageService.add({severity: 'error', summary: 'Error:', detail: error.message});
    }); // TODO Add navigate back.
  }

  onHandleUploader(): void{
    this.showUploader = !this.showUploader;
  }

  async onUpload(event: any): Promise<void> {
    if (this.photoPath !== ''){
      this.storage.ref(this.photoPath).delete();
    }
    const file = event.files[0] as File;
    const path = `userPhoto/${file.name}_${Date.now()}`;
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
}
