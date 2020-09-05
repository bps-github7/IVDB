import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

    data;

    constructor(private db: AngularFirestore) { 
        this.data = this.db.collection('/game_info/KZX1GyjNGtwUzHsyICBO');

    }

    getCategories$() {
        return this.data.valueChanges();
    }

    // this violates encapsulation but doesnt make a lot of sense
    // to make three seperate services for such a similar task
    getCreators$() {
        return this.db.collection('/creators').valueChanges();
    }

    getConsoleMakers$() {
        return this.db.collection('/console_makers').valueChanges();
    }
}

