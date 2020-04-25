import { Component, HostBinding, OnInit } from '@angular/core';

import { Anime } from '../../models/Animes';
import { AnimesService } from '../../services/animes.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-animes-list',
  templateUrl: './animes-list.component.html',
  styleUrls: ['./animes-list.component.css']
})
export class AnimesListComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  animesForUser: Array<Anime>
  animes: Array<Anime>
  username:string
  userLog: string
  constructor(private service: AnimesService, private authService: AuthService) {
    this.userLog=this.authService.authStatus.getValue().email
    this.animes=null
    this.animesForUser=null
  }


  ngOnInit() {
    var scope = this
    this.service.getAnimes(function(animes) {
      scope.animes= animes
    })
  }
  loadUsername(cat){
    this.username= cat.user.split('@')[0].toUpperCase()
  }
  loadAnimes(){
    this.animesForUser=this.animes.filter(a=>a.user == this.userLog)
  }
  deleteAnime(id: string) {
    this.service.deleteAnime(id)
  }


}
