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
  showSideBar : boolean = false;
  showFiller = false;

  constructor(private location: Location,
              private testGet: TestGetService) { }

  ngOnInit() {
    this.getTest();
  }

  goBack(): void {
    this.location.back();
  }

  setShowSideBar(): void {
    this.showSideBar = !this.showSideBar;
  }

  getShowSideBar(): boolean{
    return this.showSideBar;
  }

  getTest(): void {
    this.testGet.getInfos()
      .subscribe(test => this.test = test);
  }

}
