import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-aled-breathe',
  templateUrl: './aled-breathe.component.html',
  styleUrls: ['./aled-breathe.component.css']
})
export class AledBreatheComponent implements OnInit {


  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToPls() {
    this.router.navigateByUrl("/aled-pls");
  }

  goToBad() {
    this.router.navigateByUrl("/aled-bad");
  }
}
