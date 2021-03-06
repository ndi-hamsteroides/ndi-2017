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
import { AledHomeComponent } from './aled/aled-home/aled-home.component';
import { SamComponent } from './sam/sam.component';
import { AledOkComponent } from './aled/aled-ok/aled-ok.component';
import { AledBreatheComponent } from './aled/aled-breathe/aled-breathe.component';
import { AledPlsComponent } from './aled/aled-pls/aled-pls.component';
import { AledBadComponent } from './aled/aled-bad/aled-bad.component';

import { MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatSidenavModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { SamChoiceComponent } from './sam-choice/sam-choice.component';
import { DriveTestComponent } from './drive-test/drive-test.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    InfosComponent,
    AledHomeComponent,
    SamComponent,
    AledOkComponent,
    AledBreatheComponent,
    AledPlsComponent,
    AledBadComponent,
    SamChoiceComponent,
    DriveTestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatSidenavModule,
    NoopAnimationsModule,BrowserAnimationsModule
  ],
  providers: [TestGetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
