import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private afs : AngularFirestore) { 
      this.afs.collection('categories')
  }
}
