import { Anime, Drama, Manga } from '../../models/Animes';
import { Component, HostBinding, OnInit } from '@angular/core';

import { AnimesService } from '../../services/animes.service';
import { AuthService } from 'src/app/auth/auth.service';
import { DramasService } from '../../services/dramas.service';
import { MangasService } from '../../services/mangas.service';

@Component({
  selector: 'app-all-list',
  templateUrl: './all-list.component.html',
  styleUrls: ['./all-list.component.css']
})
export class AllListComponent implements OnInit {
  tipo: string = ''
  userSelect: string = ''
  username: string
  @HostBinding('class') classes = 'row';
  userLog: string
  animes: Array<Anime>;
  mangas: Array<Manga>
  dramas: Array<Drama>
  usuarios: string[]
  list:any
  // tslint:disable-next-line: max-line-length
  constructor(private serviceAnime: AnimesService, private serviceManga: MangasService,private service: DramasService, private authService: AuthService) {
    this.userLog = this.authService.authStatus.getValue().email
    this.animes = null
    this.mangas = null
    this.dramas = null
  }


  ngOnInit() {
    let scope = this;
    this.serviceAnime.getAnimes(function(animes) {
      scope.animes = animes;
    });
    this.serviceManga.getMangas(function(mangas) {
      scope.mangas = mangas
    })
    this.service.getDramas(function(dramas) {
      scope.dramas = dramas
    })
  }
  loadUsername(cat){
    this.username = cat.user.split('@')[0].toUpperCase()
  }

  getUSers(lista){
    let arregloConRepetidos = lista.map(a => a.user.split('@')[0].toUpperCase())
    let sinRepetidos = arregloConRepetidos.filter(function(valor, indiceActual, arreglo) {
      let indiceAlBuscar = arreglo.indexOf(valor);
      if (indiceActual === indiceAlBuscar) {
          return true;
      } else {
          return false;
      }
  });
    this.usuarios = sinRepetidos
  }
  getListForUser(){
    if (this.tipo == 'mangas'){
      this.list= this.mangas.filter(m=> m.user.split('@')[0].toUpperCase() === this.userSelect)
    }else if (this.tipo == 'animes'){
      this.list= this.animes.filter(m=> m.user.split('@')[0].toUpperCase() === this.userSelect)
    }else if (this.tipo == 'dramas'){
      this.list= this.dramas.filter(m=> m.user.split('@')[0].toUpperCase() === this.userSelect)
    }


  }
}
