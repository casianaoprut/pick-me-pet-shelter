import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AuthComponent} from './auth/auth.component';
import {PetListComponent} from './pet-list/pet-list.component';
import {HomePageComponent} from './home-page/home-page.component';
import {AdoptionFormComponent} from './forms/adoption-form/adoption-form.component';
import {AuthGuard} from './shared/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'home-page', pathMatch: 'full'},
  {path: 'home-page', component: HomePageComponent},
  {path: 'pets', component: PetListComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'forms/adoption', component: AdoptionFormComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
