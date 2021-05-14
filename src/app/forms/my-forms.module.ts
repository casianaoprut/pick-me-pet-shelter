import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import {PrimengModule} from '../primeng.module';
import {MaterialModule} from '../material.module';

import {AdoptionFormComponent} from './adoption-form/adoption-form.component';
import {VolunteerFormComponent} from './volunteer-form/volunteer-form.component';
import {DonationFormComponent} from './donation-form/donation-form.component';
import {FormListComponent} from './form-list/form-list.component';
import {AdoptionFormListComponent} from './form-list/adoption-form-list/adoption-form-list.component';
import {VolunteerFormListComponent} from './form-list/volunteer-form-list/volunteer-form-list.component';
import {MyFormsRoutingModule} from './my-forms-routing.module';
import { FormsComponent } from './forms.component';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [
    AdoptionFormComponent,
    VolunteerFormComponent,
    DonationFormComponent,
    FormListComponent,
    AdoptionFormListComponent,
    VolunteerFormListComponent,
    FormsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimengModule,
    MaterialModule,
    MyFormsRoutingModule,
    SharedModule
  ],
  exports: []
})
export class MyFormsModule { }
