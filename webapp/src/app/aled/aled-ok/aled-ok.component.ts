import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-aled-ok',
  templateUrl: './aled-ok.component.html',
  styleUrls: ['./aled-ok.component.css']
})
export class AledOkComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToBreathe() {
    this.router.navigateByUrl('/aled-breathe');
  }

}
