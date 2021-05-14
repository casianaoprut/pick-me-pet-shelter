import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VolunteerFormItemComponent} from '../forms/form-list/volunteer-form-list/volunteer-form-item/volunteer-form-item.component';
import {AdoptionFormItemComponent} from '../forms/form-list/adoption-form-list/adoption-form-item/adoption-form-item.component';
import {PetDetailsComponent} from '../pet-list/pet-details/pet-details.component';
import {PrimengModule} from '../primeng.module';
import {MaterialModule} from '../material.module';



@NgModule({
  declarations: [
    VolunteerFormItemComponent,
    AdoptionFormItemComponent,
    PetDetailsComponent
  ],
  imports: [
    PrimengModule,
    MaterialModule,
    CommonModule
  ],
  exports: [
    VolunteerFormItemComponent,
    AdoptionFormItemComponent,
    PetDetailsComponent
  ]
})
export class SharedModule { }
