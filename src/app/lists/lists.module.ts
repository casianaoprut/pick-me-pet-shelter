import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PrimengModule} from '../primeng.module';
import {MaterialModule} from '../material.module';

import {UserFormsListComponent} from './user-forms-list/user-forms-list.component';
import {UserAdoptionFormComponent} from './user-forms-list/user-adoption-form/user-adoption-form.component';
import {AdoptionsListComponent} from './admin-lists/adoptions-list/adoptions-list.component';
import {UserVolunteerFormComponent} from './user-forms-list/user-volunteer-form/user-volunteer-form.component';
import {VolunteerListComponent} from './admin-lists/volunteer-list/volunteer-list.component';
import {ListsRoutingModule} from './lists-routing.module';
import { ListComponent } from './list.component';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [
    UserFormsListComponent,
    UserAdoptionFormComponent,
    AdoptionsListComponent,
    UserVolunteerFormComponent,
    VolunteerListComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    PrimengModule,
    MaterialModule,
    SharedModule,
    ListsRoutingModule
  ],
  exports: []
})
export class ListsModule { }
