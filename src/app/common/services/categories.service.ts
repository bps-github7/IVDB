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

    setSpecificCategory(category : any) {
        /* For updating a SINGLE document
        ie editing the title or description, or both,
        of one document specified via 'uid' argument
        */
       this.categoriesCollection.doc(category.docUid)
       .set(
           {title : category.title,
            description : category.description},
            {merge : true})
            .then(() => {
                console.log("Document succesfully written to!")
            })
            .catch((err) => {
                console.log(`Error encountered while setting ${category.docUid} category: ${err}`)
            });
    }

    setCategories() {

    }

    getAll$() : Observable <GameDescriptor[]> {
        return this.categoriesCollection.valueChanges({idField : 'uid'});
    }
}
