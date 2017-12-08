import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aled-breathe',
  templateUrl: './aled-breathe.component.html',
  styleUrls: ['./aled-breathe.component.css']
})
export class AledBreatheComponent implements OnInit {

  private status: number;

  constructor() { }

  ngOnInit() {
    this.status = 0;
  }

}
