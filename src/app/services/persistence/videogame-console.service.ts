import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Firestore, collectionData } from '@angular/fire/firestore';
import { VideogameConsole } from "src/app/models/content/videogame-console.model";
import { addDoc, collection, deleteDoc, doc, updateDoc } from '@firebase/firestore';

@Injectable()
export class VideogameConsoleService {
	consoles;

	constructor(private afs: Firestore) {
		this.consoles = collection(this.afs, 'consoles')
	}

	getAll() {
		return collectionData(this.consoles, {
			idField: 'id'
		}) as Observable<VideogameConsole []>
	}

	create(console : VideogameConsole) {
		return addDoc(this.consoles, console)
	}

	update(console : Partial<VideogameConsole>) {
		const consoleDocumentReference = doc(
			this.consoles,
			`consoles/${console.id}`
		)
		return updateDoc(consoleDocumentReference, { ...console })
	}

	delete(id: string) {
		const consoleDocumentReference = doc(this.consoles, `consoles/${id}`)
		return deleteDoc(consoleDocumentReference)
	}
}
