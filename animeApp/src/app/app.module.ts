import "firebase/auth";
import "firebase/database";

import { CommonModule, DatePipe } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireModule } from "angularfire2";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { AuthGuard } from "./auth/auth-guard.service";
import { AuthService } from "./auth/auth.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from "./components/layout/footer/footer.component";
import { HeaderComponent } from "./components/layout/header/header.component";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from "./components/login/login.component";
import { MatPseudoCheckboxModule } from "@angular/material/core";
import { MaterialModule } from "./material.module";
import { NgModule } from "@angular/core";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { WebModule } from "./web/web-admin.module";
import { environment } from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FlexLayoutModule,
    WebModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatPseudoCheckboxModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule

  ],
  providers: [AuthService, AuthGuard,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
