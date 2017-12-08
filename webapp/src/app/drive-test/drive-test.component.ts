import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drive-test',
  templateUrl: './drive-test.component.html',
  styleUrls: ['./drive-test.component.css']
})
export class DriveTestComponent implements OnInit {

  private start: boolean;
  private end: boolean;
  private wokeup: boolean;
  private timeout: number;
  private start_time: any;
  private end_time: any;
  private time_taken: any;
  private ok: boolean;

  constructor() { }

  ngOnInit() {
    this.start = false;
    this.end = false;
  }

  doStart() {
    this.timeout = Math.floor((Math.random() * 2000)) + 200;
    this.start = true;
    setTimeout(() => {
      this.wokeup = true;
      this.start_time = new Date();
    }, this.timeout);
  }

  doPress() {
    this.end = true;
    this.end_time = new Date();
    this.time_taken = this.end_time - this.start_time;
    this.ok = this.time_taken <= 650;
  }

  private changeImage() {
    this.wokeup = true;
  }
}
