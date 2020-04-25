import { Component, HostBinding, OnInit } from '@angular/core';

import { AuthService } from 'src/app/auth/auth.service';
import { Manga } from '../../models/Animes';
import { MangasService } from '../../services/mangas.service';

@Component({
  selector: 'app-manga-list',
  templateUrl: './manga-list.component.html',
  styleUrls: ['./manga-list.component.css']
})
export class MangaListComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  mangasForUser: Array<Manga>
  mangas: Array<Manga>
  username:string
  userLog: string
  constructor(private service: MangasService, private authService: AuthService) {
    this.userLog=this.authService.authStatus.getValue().email
    this.mangas=null
    this.mangasForUser=null

  }


  ngOnInit() {
    var scope = this
    this.service.getMangas(function(mangas) {
      scope.mangas= mangas
    })
  }
  loadUsername(cat){
    this.username= cat.user.split('@')[0].toUpperCase()
  }
  loadMangas(){
    this.mangasForUser=this.mangas.filter(a=>a.user == this.userLog)
  }
  deleteManga(id: string) {
    this.service.deleteManga(id)
  }


}
