import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Injectable } from '@angular/core';
import { Manga } from '../models/Animes';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MangasService {
      mangasRef: AngularFireList<Manga> = null;
      mangas: any;

      constructor(private db: AngularFireDatabase) {
        this.mangasRef = db.list("/mangas");
      }
      getmangas(onMangasLoaded) {
        this.mangasRef
          .snapshotChanges()
          .pipe(
            map(changes =>
              changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
            )
          )
          .subscribe(mangas => {
            const listMangas = Array<Manga>();
            mangas.forEach(function(manga) {
              listMangas.push(new Manga(manga));
            });
            onMangasLoaded(listMangas);
          }, this.handleError);
      }

      getManga(key: string, onLoaded) {
        return this.db
          .object(`mangas/${key}`)
          .snapshotChanges()
          .subscribe(data => onLoaded(data.payload.val()));
      }

      createManga(manga: Manga, onSaved): void {
        this.mangasRef.push(manga).then(onSaved);
      }

      updateManga(key: string, value: any): void {
        this.mangasRef
          .update(key, value)
          .catch(error => this.handleError(error));
      }

      deleteManga(key: string): void {
        this.mangasRef.remove(key).catch(error => this.handleError(error));
      }

      private handleError(error) {
        console.log(error);
      }
    }

