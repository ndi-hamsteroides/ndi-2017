import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToAled() {
    this.router.navigateByUrl('/aled');
  }

  goToVoiture() {
    this.router.navigateByUrl('/drive-test');
  }

  goToSam() {
    this.router.navigateByUrl('/samChoice');
  }

  goToInfos() {
    this.router.navigateByUrl('/infos');
  }

  goToCreds() {
    this.router.navigateByUrl('/creds');
  }

}
