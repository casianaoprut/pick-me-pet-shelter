import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { GoogleSignInComponent } from './auth/google-sign-in/google-sign-in.component';
import {environment} from '../environments/environment';
import { EmailSignUpComponent } from './auth/email-sign-up/email-sign-up.component';
import {FormsModule} from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetEditComponent } from './pet-list/pet-edit/pet-edit.component';
import { PetItemComponent } from './pet-list/pet-item/pet-item.component';
import { PetDetailsComponent } from './pet-list/pet-details/pet-details.component';
import {EmailLogInComponent} from './auth/email-log-in/email-log-in.component';
import { HomePageComponent } from './home-page/home-page.component';

import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';

import {DropdownDirective} from './shared/dropdown.directive';
import { VolunteerFormComponent } from './forms/volunteer-form/volunteer-form.component';


@NgModule({
  declarations: [
    AppComponent,
    GoogleSignInComponent,
    EmailSignUpComponent,
    AuthComponent,
    HeaderComponent,
    DropdownDirective,
    PetListComponent,
    PetEditComponent,
    PetItemComponent,
    PetDetailsComponent,
    HomePageComponent,
    EmailLogInComponent,
    VolunteerFormComponent,
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
      ButtonModule,
      CardModule,
      BrowserAnimationsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
