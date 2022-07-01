import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GallaghersComponent } from './gallaghers/gallaghers.component';

const routes: Routes = [
  { path: 'gallaghers', component: GallaghersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
