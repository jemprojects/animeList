import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireModule } from "angularfire2";
import { AnimeFormComponent } from './components/anime-form/anime-form.component';
import { AnimesListComponent } from './components/animes-list/animes-list.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from '@angular/flex-layout';
import { MangaFormComponent } from './components/manga-form/manga-form.component';
import { MangaListComponent } from './components/manga-list/manga-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NgModule } from "@angular/core";
import { WebAdminComponent } from "./web-admin.component";
import { WebAdminMaterialModule } from "./web-admin.material.module";
import { WebRoutingModule } from "./web-admin-routing.module";
import { environment } from "../../environments/environment";

@NgModule({
  declarations: [
    WebAdminComponent,
    NavigationComponent,
    AnimesListComponent,
    AnimeFormComponent,
    MangaListComponent,
    MangaFormComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    WebRoutingModule,
    WebAdminMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],

})
export class WebModule {}
