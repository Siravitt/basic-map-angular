import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapModule } from './map/map.module';
import { Assignment11Component } from './assignment1.1/assignment1.1.component';
import { Assignment12Component } from './assignment1.2/assignment1.2.component';
import { Assignment13Component } from './assignment1.3/assignment1.3.component';
import { FormComponent } from './assignment1.3/form/form.component';
import { ListComponent } from './assignment1.3/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    Assignment11Component,
    Assignment12Component,
    Assignment13Component,
    FormComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
