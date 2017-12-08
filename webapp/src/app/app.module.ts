import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InfosComponent } from './infos/infos.component';
import { NavbarComponent } from './navbar/navbar.component';

import {TestGetService} from "./test-get.service";

import { AppRoutingModule } from './app-routing.module';
import { AledComponent } from './aled/aled.component';
import { SamComponent } from './sam/sam.component';
import { AledOkComponent } from './aled-ok/aled-ok.component';
import { AledBreatheComponent } from './aled-breathe/aled-breathe.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    InfosComponent,
    AledComponent,
    SamComponent,
    AledOkComponent,
    AledBreatheComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [HttpClientModule,TestGetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
