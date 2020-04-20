import { RouterModule, Routes } from "@angular/router";

import { AnimeFormComponent } from './components/anime-form/anime-form.component';
import { AnimesListComponent } from './components/animes-list/animes-list.component';
import { AuthGuard } from '../auth/auth-guard.service';
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
        redirectTo: "animes",
        pathMatch: "full"
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
      },

    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule {}
