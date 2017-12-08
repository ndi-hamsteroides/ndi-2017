import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aled-pls',
  templateUrl: './aled-pls.component.html',
  styleUrls: ['./aled-pls.component.css']
})
export class AledPlsComponent implements OnInit {

  private pls: boolean;

  constructor() { }

  ngOnInit() {
  }

  doPls() {
    this.pls = true;
  }

}
