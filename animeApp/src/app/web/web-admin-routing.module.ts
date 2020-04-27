import { RouterModule, Routes } from "@angular/router";

import { AllListComponent } from './components/all-list/all-list.component';
import { AnimeFormComponent } from './components/anime-form/anime-form.component';
import { AnimesListComponent } from './components/animes-list/animes-list.component';
import { AuthGuard } from '../auth/auth-guard.service';
import { DramaFormComponent } from './components/drama-form/drama-form.component';
import { DramaListComponent } from './components/drama-list/drama-list.component';
import { MangaFormComponent } from './components/manga-form/manga-form.component';
import { MangaListComponent } from './components/manga-list/manga-list.component';
import { NgModule } from "@angular/core";
import { WebAdminComponent } from "./web-admin.component";

const routes: Routes = [
  {
    path: "",
    component: WebAdminComponent,
    children: [

      {
        path: "",
        redirectTo: "AllForOne",
        pathMatch: "full"
      },
      {

        path: "AllForOne",
        component: AllListComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'animes',
        component: AnimesListComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'anime/:id',
        component: AnimeFormComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'mangas',
        component: MangaListComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'manga/:id',
        component: MangaFormComponent,
        canActivate: [AuthGuard],
      },     {
        path: 'dramas',
        component: DramaListComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'drama/:id',
        component: DramaFormComponent,
        canActivate: [AuthGuard],
      },

    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule {}
