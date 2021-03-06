import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { GameDescriptor } from 'src/app/models/content/GameDescriptor';

@Injectable({
    providedIn: 'root'
})
export class CategoriesService {

    categoriesCollection : AngularFirestoreCollection<GameDescriptor>

    constructor(private afs: AngularFirestore) {
        this.categoriesCollection = this.afs.collection('categories');
    }

    getAll$() : Observable <GameDescriptor[]> {
        return this.categoriesCollection.valueChanges();
    }
}
