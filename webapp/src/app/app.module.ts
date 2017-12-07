import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InfosComponent } from './infos/infos.component';

import {TestGetService} from "./test-get.service";

import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [TestGetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
