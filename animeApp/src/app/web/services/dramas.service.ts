import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

import { Drama } from '../models/Animes';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DramasService {
    dramasRef: AngularFireList<Drama> = null;
    dramas: any;

    constructor(private db: AngularFireDatabase) {
      this.dramasRef = db.list("/dramas");
    }
    getDramas(onDramasLoaded) {
      this.dramasRef
        .snapshotChanges()
        .pipe(
          map(changes =>
            changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
          )
        )
        .subscribe(dramas => {
          const listDramas = Array<Drama>();
          dramas.forEach(function(drama) {
            listDramas.push(new Drama(drama));
          });
          onDramasLoaded(listDramas);
        }, this.handleError);
    }

    getDrama(key: string, onLoaded) {
      return this.db
        .object(`dramas/${key}`)
        .snapshotChanges()
        .subscribe(data => onLoaded(data.payload.val()));
    }

    createDrama(Drama: Drama, onSaved): void {
      this.dramasRef.push(Drama).then(onSaved);
    }

    updateDrama(key: string, value: any): void {
      this.dramasRef
        .update(key, value)
        .catch(error => this.handleError(error));
    }

    deleteDrama(key: string): void {
      this.dramasRef.remove(key).catch(error => this.handleError(error));
    }

    private handleError(error) {
      console.log(error);
    }
  }
