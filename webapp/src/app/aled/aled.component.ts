import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aled',
  templateUrl: './aled.component.html'
})
export class AledComponent implements OnInit {

  private step: number;

  constructor() { }

  ngOnInit() {
    this.step = 0;
  }

  /*
   Le step permets de définir quelle page afficher (et quelles instructions sont adéquates)
   */
  setStep(new_step: number) {
    this.step = new_step;
  }
}
