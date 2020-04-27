import { Component, HostBinding, OnInit } from '@angular/core';

import { AuthService } from 'src/app/auth/auth.service';
import { Drama } from '../../models/Animes';
import { DramasService } from '../../services/dramas.service';

@Component({
  selector: 'app-drama-list',
  templateUrl: './drama-list.component.html',
  styleUrls: ['./drama-list.component.css']
})
export class DramaListComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  dramasForUser: Array<Drama>
  dramas: Array<Drama>
  username:string
  userLog: string
  constructor(private service: DramasService, private authService: AuthService) {
    this.userLog=this.authService.authStatus.getValue().email
    this.dramas=null
    this.dramasForUser=null

  }


  ngOnInit() {
    var scope = this
    this.service.getDramas(function(Dramas) {
      scope.dramas= Dramas
    })
  }
  loadUsername(cat){
    this.username= cat.user.split('@')[0].toUpperCase()
  }
  loadDramas(){
    this.dramasForUser=this.dramas.filter(a=>a.user == this.userLog)
  }
  deleteDrama(id: string) {
    this.service.deleteDrama(id)
  }


}
