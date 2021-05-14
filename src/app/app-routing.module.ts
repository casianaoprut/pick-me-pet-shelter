import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

import {HomePageComponent} from './home-page/home-page.component';


const routes: Routes = [
  {path: '', redirectTo: 'home-page', pathMatch: 'full'},
  {path: 'home-page', component: HomePageComponent},
  {path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule)},
  {path: 'forms',
    loadChildren: () => import('./forms/my-forms.module').then(module => module.MyFormsModule)},
  {path: 'list',
    loadChildren: () => import('./lists/lists.module').then(module => module.ListsModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
