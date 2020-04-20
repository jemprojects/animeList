import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./components/login/login.component";
import { NgModule } from "@angular/core";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "home",
    redirectTo: "animes",
    pathMatch: "full"
  },

  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
