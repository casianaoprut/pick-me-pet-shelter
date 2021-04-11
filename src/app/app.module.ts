import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleSignInComponent } from './auth/google-sign-in/google-sign-in.component';

import {environment} from '../environments/environment';
import { EmailSignUpComponent } from './auth/email-sign-up/email-sign-up.component';
import {FormsModule} from '@angular/forms';
import { AuthComponent } from './auth/auth.component';

import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    GoogleSignInComponent,
    EmailSignUpComponent,
    AuthComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFirestoreModule,
      AngularFireAuthModule,
      AngularFireStorageModule,
      FormsModule,
      PasswordModule,
      InputTextModule,
      ButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
