import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GallaghersComponent } from './gallaghers/gallaghers.component';
import { FormsModule } from '@angular/forms';
import { GallagherDetailComponent } from './gallagher-detail/gallagher-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    GallaghersComponent,
    GallagherDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
