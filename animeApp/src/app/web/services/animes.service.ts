import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

import { Anime } from '../models/Animes';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {
    animesRef: AngularFireList<Anime> = null;
    animes: any;

    constructor(private db: AngularFireDatabase) {
      this.animesRef = db.list("/animes");
    }
    getAnimes(onAnimesLoaded) {
      this.animesRef
        .snapshotChanges()
        .pipe(
          map(changes =>
            changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
          )
        )
        .subscribe(animes => {
          const listAnimes = Array<Anime>();
          animes.forEach(function(anime) {
            listAnimes.push(new Anime(anime));
          });
          onAnimesLoaded(listAnimes);
        }, this.handleError);
    }

    getAnime(key: string, onLoaded) {
      return this.db
        .object(`animes/${key}`)
        .snapshotChanges()
        .subscribe(data => onLoaded(data.payload.val()));
    }

    createAnime(anime: Anime, onSaved): void {
      this.animesRef.push(anime).then(onSaved);
    }

    updateAnime(key: string, value: any): void {
      this.animesRef
        .update(key, value)
        .catch(error => this.handleError(error));
    }

    deleteAnime(key: string): void {
      this.animesRef.remove(key).catch(error => this.handleError(error));
    }

    private handleError(error) {
      console.log(error);
    }
  }
