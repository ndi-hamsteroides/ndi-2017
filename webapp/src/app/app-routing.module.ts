import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./home/home.component";
import {InfosComponent} from "./infos/infos.component";
import {AledComponent} from './aled/aled.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'detail/test', component: InfosComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'aled', component: AledComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
