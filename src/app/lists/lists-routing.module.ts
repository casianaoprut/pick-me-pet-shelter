import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import {AuthGuard} from '../shared/guards/auth.guard';
import {AdminGuard} from '../shared/guards/admin.guard';

import {AdoptionsListComponent} from './admin-lists/adoptions-list/adoptions-list.component';
import {VolunteerListComponent} from './admin-lists/volunteer-list/volunteer-list.component';
import {UserFormsListComponent} from './user-forms-list/user-forms-list.component';
import {ListComponent} from './list.component';

const routes: Routes = [
    {path: '', component: ListComponent, canActivate: [AuthGuard], children: [
      {path: '', redirectTo: '/home-page', pathMatch: 'full'},
      {path: 'adoptions', component: AdoptionsListComponent, canActivate: [AdminGuard]},
      {path: 'volunteers', component: VolunteerListComponent, canActivate: [AdminGuard]},
      {path: 'my-forms', component: UserFormsListComponent},
    ]},
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListsRoutingModule { }
