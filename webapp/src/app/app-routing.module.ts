import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {InfosComponent} from "./infos/infos.component";
import {SamChoiceComponent} from "./sam-choice/sam-choice.component";
import {AledHomeComponent} from './aled/aled-home/aled-home.component';
import {AledOkComponent} from './aled/aled-ok/aled-ok.component';
import {AledBreatheComponent} from './aled/aled-breathe/aled-breathe.component';
import {AledBadComponent} from './aled/aled-bad/aled-bad.component';
import {AledPlsComponent} from './aled/aled-pls/aled-pls.component';
import {DriveTestComponent} from "./drive-test/drive-test.component";
import {CredsComponent} from "./creds/creds.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'infos', component: InfosComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'samChoice', component: SamChoiceComponent },
  { path: 'aled', component: AledHomeComponent },
  { path: 'aled-ok', component: AledOkComponent },
  { path: 'aled-breathe', component: AledBreatheComponent },
  { path: 'aled-pls', component: AledPlsComponent },
  { path: 'aled-bad', component: AledBadComponent },
  { path: 'drive-test', component: DriveTestComponent },
  { path: 'creds', component: CredsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
