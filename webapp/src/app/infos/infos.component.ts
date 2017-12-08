import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import {TestGetService} from "../test-get.service";
import {Infos} from "../infos";

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {


  test: Infos;

  constructor(private location: Location,
              private testGet: TestGetService) { }

  ngOnInit() {
    this.getTest();
  }

  //Permet de récupérer des données
  getTest(): void {
    this.testGet.getInfos()
      .subscribe(test => this.test = test);
  }

  //Tire une infos aux hazards
  shuffle(): void {

  }

}
