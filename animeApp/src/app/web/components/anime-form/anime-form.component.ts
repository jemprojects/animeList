import { ActivatedRoute, Router } from '@angular/router';
import { Component, HostBinding, OnInit } from '@angular/core';

import { Anime } from '../../models/Animes';
import { AnimesService } from '../../services/animes.service';
import { AuthService } from 'src/app/auth/auth.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-anime-form',
  templateUrl: './anime-form.component.html',
  styleUrls: ['./anime-form.component.css']
})
export class AnimeFormComponent implements OnInit {
  animeInEdition: Anime;
  formTitle: string;
  animeKey: string;
  enableAnimeCreation = false;
  isNew: boolean;
  continueAdding = false;
  @HostBinding('class') clases = 'row';
  public hoy = this.datepipe.transform(
    new Date(),
    'dd/MM/yyyy hh:mm:ss',
  );

  edit: boolean = false;


  constructor(private authService: AuthService, public datepipe: DatePipe, private service: AnimesService,
              private router: Router, private ruteActive: ActivatedRoute,) {

  }

  ngOnInit() {
    this.animeKey = this.ruteActive.snapshot.paramMap.get("id");
    if (this.animeKey === "null") {
      this.setupFormNewAnime();
    } else {
      this.setupFormEditAnime();

    }


  }
  backToHome(): void {
    this.router.navigate(["/"]);
  }
  setupFormEditAnime() {
    this.isNew = false;
    this.service.getAnime(this.animeKey, data => {
     this.animeInEdition = new Anime(data);
      this.formTitle = `Editar Anime ${this.animeInEdition.title}`;
    });
  }
  setupFormNewAnime() {
    this.isNew = true;
    this.enableAnimeCreation = true;
    this.formTitle = "Agregar nuevo anime";
    this.animeInEdition = new Anime({
      title: '',
      description: '',
      link:'',
      estado:'',
      ultimoCapitulo:'',
      estadoDelAnime:'',
      image: '',
      calificacion:0,
      user: this.authService.authStatus.getValue().email,
      created_at: new Date()
    });
  }
  saveNewAnime(anime) {
    const jsonProvider = anime
    const keyout = 'key'
    delete jsonProvider[keyout]
    console.log(jsonProvider)
    if (this.isNew) {
      anime.created_at =this.hoy
      this.service.createAnime(jsonProvider, () => { })
    }
   else {
      this.service.updateAnime(this.animeKey, jsonProvider)
    }
    this.backToHome()
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
