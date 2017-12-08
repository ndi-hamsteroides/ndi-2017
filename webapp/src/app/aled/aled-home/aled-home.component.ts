import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-aled',
  templateUrl: './aled-home.component.html',
})
export class AledHomeComponent implements OnInit {


  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToOk() {
    this.router.navigateByUrl('/aled-ok');
  }

  goToBreathe() {
    this.router.navigateByUrl('/aled-breathe');
  }
}
