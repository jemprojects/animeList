import { Component, HostBinding, OnInit } from '@angular/core';

import { Anime } from '../../models/Animes';
import { AnimesService } from '../../services/animes.service';

@Component({
  selector: 'app-animes-list',
  templateUrl: './animes-list.component.html',
  styleUrls: ['./animes-list.component.css']
})
export class AnimesListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  animes: Array<Anime>

  constructor(private service: AnimesService) { }


  ngOnInit() {
    var scope = this
    this.service.getAnimes(function(animes) {
      scope.animes= animes
    })
  }

  deleteGame(id: string) {
    this.service.deleteAnime(id)
  }


}
