import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthGuard} from '../shared/guards/auth.guard';
import {AdminGuard} from '../shared/guards/admin.guard';

import {AdoptionFormComponent} from './adoption-form/adoption-form.component';
import {VolunteerFormComponent} from './volunteer-form/volunteer-form.component';
import {FormListComponent} from './form-list/form-list.component';
import {DonationFormComponent} from './donation-form/donation-form.component';
import {FormsComponent} from './forms.component';

const routes: Routes = [
  {path: '', component: FormsComponent, children: [
    {path: '', redirectTo: '/home-page', pathMatch: 'full'},
    {path: 'adoption', component: AdoptionFormComponent, canActivate: [AuthGuard]},
    {path: 'volunteer', component: VolunteerFormComponent, canActivate: [AuthGuard]},
    {path: 'donation', component: DonationFormComponent, canActivate: [AuthGuard]},
    {path: 'manage-forms', component: FormListComponent, canActivate: [AuthGuard , AdminGuard]},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyFormsRoutingModule { }
