import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drive-test',
  templateUrl: './drive-test.component.html',
  styleUrls: ['./drive-test.component.css']
})
export class DriveTestComponent implements OnInit {

  private start: boolean;
  private end : boolean;

  constructor() { }

  ngOnInit() {
    this.start = false;
    this.end = false;
  }

  doStart() {
    this.start = true;
  }

  doEnd() {
    this.end = true;
  }

}
