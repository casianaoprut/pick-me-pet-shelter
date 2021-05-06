import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AuthComponent} from './auth/auth.component';
import {PetListComponent} from './pet-list/pet-list.component';
import {HomePageComponent} from './home-page/home-page.component';
import {VolunteerFormComponent} from './forms/volunteer-form/volunteer-form.component';
import {AdoptionFormComponent} from './forms/adoption-form/adoption-form.component';
import {AuthGuard} from './shared/auth.guard';
import {FormListComponent} from './forms/form-list/form-list.component';
import {AdminGuard} from './shared/admin.guard';
import {DonationFormComponent} from './forms/donation-form/donation-form.component';
import {UserFormsComponent} from './forms/user-forms/user-forms.component';
import {LoginGuard} from './shared/login.guard';
import {AdoptionsListComponent} from './adoptions-list/adoptions-list.component';
import {VolunteerListComponent} from './volunteer-list/volunteer-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'home-page', pathMatch: 'full'},
  {path: 'home-page', component: HomePageComponent},
  {path: 'pets', component: PetListComponent},
  {path: 'auth', component: AuthComponent, canActivate: [LoginGuard]},
  {path: 'forms/adoption', component: AdoptionFormComponent, canActivate: [AuthGuard]},
  {path: 'forms/volunteer', component: VolunteerFormComponent, canActivate: [AuthGuard]},
  {path: 'forms/donation', component: DonationFormComponent, canActivate: [AuthGuard]},
  {path: 'manage-forms', component: FormListComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'my-forms', component: UserFormsComponent, canActivate: [AuthGuard]},
  {path: 'adoptions-list', component: AdoptionsListComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'volunteer-list', component: VolunteerListComponent, canActivate: [AuthGuard, AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
