import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GallaghersComponent } from './gallaghers/gallaghers.component';
import { GallagherDetailComponent } from './gallagher-detail/gallagher-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'gallaghers', component: GallaghersComponent },
  { path: 'detail/:id', component: GallagherDetailComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
