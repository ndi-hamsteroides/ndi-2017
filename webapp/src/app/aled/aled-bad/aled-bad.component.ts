import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aled-bad',
  templateUrl: './aled-bad.component.html',
  styleUrls: ['./aled-bad.component.css']
})
export class AledBadComponent implements OnInit {
  private phone: boolean;

  constructor() { }

  ngOnInit() {
    this.phone = false;
  }

  doPhone() {
    this.phone = true;
  }
}
