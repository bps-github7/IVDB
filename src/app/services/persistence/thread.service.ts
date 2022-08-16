import { Thread } from "src/app/models";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Firestore, collectionData } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc, updateDoc } from '@firebase/firestore';

@Injectable()
export class ThreadService {
	threads;

	constructor(private afs: Firestore) {
		this.threads = collection(this.afs, 'threads')
	}

	getAll() {
		return collectionData(this.threads, {
			idField: 'id'
		}) as Observable<Thread []>
	}

	create(thread : Thread) {
		return addDoc(this.threads, thread)
	}

	update(thread : Partial<Thread>) {
		const threadDocumentReference = doc(
			this.threads,
			`threads/${thread.id}`
		)
		return updateDoc(threadDocumentReference, { ...thread})
	}

	delete(id: string) {
		const threadDocumentReference = doc(this.threads, `threads/${id}`)
		return deleteDoc(threadDocumentReference)
	}
}