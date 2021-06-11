import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Content } from '../models/content/content';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
   
	constructor(private afs: AngularFirestore) {
	}

	get$(uid) {
		return this.afs.collection("content").doc(uid).valueChanges();		
	}

	getCategory$(category : string) {
		const categoryRef = this.afs.collection<Content>('content', (ref) => ref.where('metadata.category', '==', category));
		return categoryRef.valueChanges({ idField : 'uid' });
	}

	getAll$() {
		return this.afs.collection("content").valueChanges({ idField : 'uid' });
	}

	create(newContent : Content) {
		this.afs.collection("content").add(newContent)
		.then(() => console.log('Successfully added a new piece of content'))
    .catch((err) => console.log(`Error while adding a new piece of content: ${err}`));
	} 

	edit(uid : string, newContent : Content) {
		this.afs.collection("content").doc<Content>(uid).set(newContent)
		.then(() => console.log('Successfully edited a piece of content'))
    .catch((err) => console.log(`Error while editing a piece of content: ${err}`));
	}

	delete(uid : string) {
		this.afs.collection("content").doc(uid).delete()
		.then(() => console.log('Successfully deleted a piece of content'))
    .catch((err) => console.log(`Error while trying to delete a piece of content: ${err}`));
	}


} 