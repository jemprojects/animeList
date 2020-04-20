import { Component, HostBinding, OnInit } from '@angular/core';

import { Manga } from '../../models/Animes';
import { MangasService } from '../../services/mangas.service';

@Component({
  selector: 'app-manga-list',
  templateUrl: './manga-list.component.html',
  styleUrls: ['./manga-list.component.css']
})
export class MangaListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  mangas: Array<Manga>

  constructor(private service: MangasService) { }


  ngOnInit() {
    var scope = this
    this.service.getmangas(function(mangas) {
      scope.mangas= mangas
    })
  }

  deleteManga(id: string) {
    this.service.deleteManga(id)
  }


}
