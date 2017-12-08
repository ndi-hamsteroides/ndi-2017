import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./home/home.component";
import {InfosComponent} from "./infos/infos.component";
import {AledHomeComponent} from './aled/aled-home/aled-home.component';
import {AledOkComponent} from "./aled/aled-ok/aled-ok.component";
import {AledBreatheComponent} from "./aled/aled-breathe/aled-breathe.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'detail/test', component: InfosComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'aled', component: AledHomeComponent },
  { path: 'aled-ok', component: AledOkComponent },
  { path: 'aled-breathe', component: AledBreatheComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
