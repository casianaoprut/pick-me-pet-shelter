import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    CardModule
  ]
})
export class PrimengModule { }
