import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {PrimengModule} from '../primeng.module';

import {PetListComponent} from './pet-list.component';
import {PetEditComponent} from './pet-edit/pet-edit.component';
import {PetItemComponent} from './pet-item/pet-item.component';
import {PetFilterComponent} from './pet-filter/pet-filter.component';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [
    PetListComponent,
    PetEditComponent,
    PetItemComponent,
    PetFilterComponent,
  ],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    RouterModule.forChild([
      {path: '', component: PetListComponent},
    ]),
    SharedModule
  ],
  exports: []
})
export class PetListModule { }
