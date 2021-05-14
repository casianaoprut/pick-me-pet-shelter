import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {PrimengModule} from '../primeng.module';
import {MaterialModule} from '../material.module';

import {GoogleSignInComponent} from './google-sign-in/google-sign-in.component';
import {EmailSignUpComponent} from './email-sign-up/email-sign-up.component';
import {EmailLogInComponent} from './email-log-in/email-log-in.component';
import {AuthComponent} from './auth.component';

import {LoginGuard} from '../shared/guards/login.guard';



@NgModule({
  declarations: [
    GoogleSignInComponent,
    EmailSignUpComponent,
    EmailLogInComponent,
    AuthComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimengModule,
    MaterialModule,
    RouterModule.forChild([
      {path: '', component: AuthComponent, canActivate: [LoginGuard]},
    ])
  ],
  exports: []
})
export class AuthModule { }
