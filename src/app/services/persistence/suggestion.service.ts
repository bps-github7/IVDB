import { Suggestion } from "src/app/models";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Firestore, collectionData } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc, updateDoc } from '@firebase/firestore';

@Injectable()
export class SuggestionService {
	suggestions;

	constructor(private afs: Firestore) {
		this.suggestions = collection(this.afs, 'suggestions')
	}

	getAll() {
		return collectionData(this.suggestions, {
			idField: 'id'
		}) as Observable<Suggestion []>
	}

	create(suggestion : Suggestion) {
		return addDoc(this.suggestions, suggestion)
	}

	update(suggestion : Partial<Suggestion>) {
		const suggestionDocumentReference = doc(
			this.suggestions,
			`suggestions/${suggestion.id}`
		)
		return updateDoc(suggestionDocumentReference, { ...suggestion})
	}

	delete(id: string) {
		const suggestionDocumentReference = doc(this.suggestions, `suggestions/${id}`)
		return deleteDoc(suggestionDocumentReference)
	}
}