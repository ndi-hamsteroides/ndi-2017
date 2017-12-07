import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { catchError, map, tap } from 'rxjs/operators';
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
  }

  goBack(): void {
    this.location.back();
  }

  getTest(): void {
    this.testGet.getInfos()
      .subscribe(test => this.test = test);
  }

}
