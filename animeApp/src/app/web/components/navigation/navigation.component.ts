import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  siteMapLabel: string;
  constructor(public authService: AuthService, public router: Router) {
    this.siteMapLabel = "Anime List";
  }
  title = 'app';
  displayNavbar: string;


  ngOnInit() {
    this.displayNavbar = '1';
  }

  toggleNavbar() {

    if(this.displayNavbar == '0') {
        this.displayNavbar = '1';
      //  alert(this.displayNavbar);
    } if(this.displayNavbar == '1') {
    //    alert("1 - Changing to 0");
        this.displayNavbar = '0';
    } else {
        this.displayNavbar = '1';
    }
  }


  logout() {
    this.authService.logout();
    this.router.navigate(["login"]);
  }

}
