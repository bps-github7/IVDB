import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

    constructor(private db: AngularFireDatabase) { }

    getCategories$() {
        return this.db.list('/categories').valueChanges();
    }

    // this violates encapsulation but doesnt make a lot of sense
    // to make three seperate services for such a similar task
    getCreators$() {
        return this.db.list('/creators').valueChanges();
    }

    getConsoleMakers$() {
        return this.db.list('/console_makers').valueChanges();
    }
}

