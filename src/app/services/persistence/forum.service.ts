import { Forum } from 'src/app/models/content/forum.model';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Firestore, collectionData } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc, updateDoc } from '@firebase/firestore';

@Injectable()
export class ForumService {
	forums;

	constructor(private afs: Firestore) {
		this.forums = collection(this.afs, 'forums')
	}

	getAll() {
		return collectionData(this.forums, {
			idField: 'id'
		}) as Observable<Forum []>
	}

	create(forum : Forum) {
		return addDoc(this.forums, forum)
	}

	update(forum : Partial<Forum>) {
		const forumDocumentReference = doc(
			this.forums,
			`forums/${forum.id}`
		)
		return updateDoc(forumDocumentReference, { ...forum})
	}

	delete(id: string) {
		const forumDocumentReference = doc(this.forums, `forums/${id}`)
		return deleteDoc(forumDocumentReference)
	}
}