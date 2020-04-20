import { ActivatedRoute, Router } from '@angular/router';
import { Component, HostBinding, OnInit } from '@angular/core';

import { AuthService } from 'src/app/auth/auth.service';
import { DatePipe } from '@angular/common';
import { Manga } from '../../models/Animes';
import { MangasService } from '../../services/mangas.service';

@Component({
  selector: 'app-manga-form',
  templateUrl: './manga-form.component.html',
  styleUrls: ['./manga-form.component.css']
})
export class MangaFormComponent implements OnInit {
  mangaInEdition: Manga;
  formTitle: string;
  mangaKey: string;
  enablemangaCreation = false;
  isNew: boolean;
  continueAdding = false;
  @HostBinding('class') clases = 'row';
  public hoy = this.datepipe.transform(
    new Date(),
    'dd/MM/yyyy hh:mm:ss',
  );

  edit: boolean = false;

  constructor(public authService: AuthService, public datepipe: DatePipe,
              private service: MangasService, private router: Router, private ruteActive: ActivatedRoute,) {

  }

  ngOnInit() {
    this.mangaKey = this.ruteActive.snapshot.paramMap.get("id");
    if (this.mangaKey === "null") {
      this.setupFormNewmanga();
    } else {
      this.setupFormEditmanga();

    }


  }
  backToHome(): void {
    this.router.navigate(["/"]);
  }
  setupFormEditmanga() {
    this.isNew = false;
    this.service.getManga(this.mangaKey, data => {
     this.mangaInEdition = new Manga(data);
      this.formTitle = `Editar manga ${this.mangaInEdition.title}`;
    });
  }
  setupFormNewmanga() {
    this.isNew = true;
    this.enablemangaCreation = true;
    this.formTitle = "Agregar nuevo manga";
    this.mangaInEdition = new Manga({
      title: '',
      description: '',
      link:'',
      estado:'',
      ultimoCapitulo:'',
      genero:'',
      estadoDelManga:'',
      image: '',
      calificacion:0,
      user: this.authService.authStatus.getValue().email,
      created_at: this.datepipe.transform(
        new Date(),
        'dd/MM/yyyy hh:mm:ss',
      )
    });
  }
  saveNewGame(manga) {
    const jsonProvider = manga
    const keyout = 'key'
    delete jsonProvider[keyout]
    console.log(jsonProvider)
    if (this.isNew) {
      manga.created_at =this.hoy
      this.service.createManga(jsonProvider, () => { })
    }
   else {
      this.service.updateManga(this.mangaKey, jsonProvider)
    }
    this.backToHome()
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
