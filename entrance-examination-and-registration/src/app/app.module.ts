import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { ExaminationTypesComponent } from './examination-types/examination-types.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ShowcaseComponent,
    ExaminationTypesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
