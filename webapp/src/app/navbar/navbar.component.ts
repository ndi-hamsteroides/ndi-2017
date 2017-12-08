import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private route: any;

  constructor(
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
  }

  isHome() {
    return this.router.url === '/home';
  }

  goHome() {
    this.router.navigateByUrl('/home');
  }

  goBack(): void {
    this.location.back();
  }

}
