import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AuthComponent} from './auth/auth.component';
import {PetListComponent} from './pet-list/pet-list.component';
import {HomePageComponent} from './home-page/home-page.component';
import {VolunteerFormComponent} from './forms/volunteer-form/volunteer-form.component';

const routes: Routes = [
  {path: '', redirectTo: 'home-page', pathMatch: 'full'},
  {path: 'home-page', component: HomePageComponent},
  {path: 'pets', component: PetListComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'forms', component: VolunteerFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
