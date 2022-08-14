import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Firestore, collectionData } from '@angular/fire/firestore';
import { Content } from "src/app/models/content/content.model";
import { addDoc, collection, deleteDoc, doc, updateDoc } from '@firebase/firestore';

@Injectable()
export class ContentService {
	content;

	constructor(private afs: Firestore) {
		this.content = collection(this.afs, 'content')
	}

	getAll() {
		return collectionData(this.content, {
			idField: 'id'
		}) as Observable<Content []>
	}

	create(content : Content) {
		return addDoc(this.content, content)
	}

	update(content : Partial<Content>) {
		const contentDocumentReference = doc(
			this.content,
			`content/${content.id}`
		)
		return updateDoc(contentDocumentReference, { ...content})
	}

	delete(id: string) {
		const contentDocumentReference = doc(this.content, `content/${id}`)
		return deleteDoc(contentDocumentReference)
	}
}