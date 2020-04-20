import { Component, OnInit } from "@angular/core";

import { AuthService } from "../auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-web-admin",
  templateUrl: "./web-admin.component.html",
  styleUrls: ["./web-admin.component.css"]
})
export class WebAdminComponent implements OnInit {
  siteMapLabel: string;
  email:string
  constructor(public authService: AuthService, public router: Router) {
    this.siteMapLabel = "Anime List";
  }
  title = 'app';
  displayNavbar: string;


  ngOnInit() {
    this.displayNavbar = '1';
    this.email=this.authService.authStatus.getValue().email
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
