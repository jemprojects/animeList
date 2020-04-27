import { ActivatedRoute, Router } from '@angular/router';
import { Component, HostBinding, OnInit } from '@angular/core';

import { AuthService } from 'src/app/auth/auth.service';
import { DatePipe } from '@angular/common';
import { Drama } from '../../models/Animes';
import { DramasService } from '../../services/dramas.service';

@Component({
  selector: 'app-drama-form',
  templateUrl: './drama-form.component.html',
  styleUrls: ['./drama-form.component.css']
})
export class DramaFormComponent implements OnInit {
  dramaInEdition: Drama;
  formTitle: string;
  dramaKey: string;
  enabledramaCreation = false;
  isNew: boolean;
  continueAdding = false;
  @HostBinding('class') clases = 'row';
  public hoy = this.datepipe.transform(
    new Date(),
    'dd/MM/yyyy hh:mm:ss',
  );

  edit: boolean = false;

  constructor(public authService: AuthService, public datepipe: DatePipe,
              private service: DramasService, private router: Router, private ruteActive: ActivatedRoute,) {

  }

  ngOnInit() {
    this.dramaKey = this.ruteActive.snapshot.paramMap.get("id");
    if (this.dramaKey === "null") {
      this.setupFormNewDrama();
    } else {
      this.setupFormEditDrama();

    }


  }
  backToHome(): void {
    this.router.navigate(["/"]);
  }
  setupFormEditDrama() {
    this.isNew = false;
    this.service.getDrama(this.dramaKey, data => {
     this.dramaInEdition = new Drama(data);
      this.formTitle = `Editar drama ${this.dramaInEdition.title}`;
    });
  }
  setupFormNewDrama() {
    this.isNew = true;
    this.enabledramaCreation = true;
    this.formTitle = "Agregar nuevo drama";
    this.dramaInEdition = new Drama({
      title: '',
      description: '',
      link:'',
      estado:'',
      ultimoCapitulo:'',
      genero:'',
      estadoDelDrama:'',
      image: '',
      calificacion:0,
      user: this.authService.authStatus.getValue().email,
      created_at: this.datepipe.transform(
        new Date(),
        'dd/MM/yyyy hh:mm:ss',
      )
    });
  }
  saveNewDrama(drama) {
    const jsonProvider = drama
    const keyout = 'key'
    delete jsonProvider[keyout]
    console.log(jsonProvider)
    if (this.isNew) {
      drama.created_at =this.hoy
      this.service.createDrama(jsonProvider, () => { })
    }
   else {
      this.service.updateDrama(this.dramaKey, jsonProvider)
    }
    this.backToHome()
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
