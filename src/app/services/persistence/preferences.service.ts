import { Preferences } from './../../models/user/preferences.model';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Firestore, collectionData } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc, updateDoc } from '@firebase/firestore';

@Injectable()
export class PreferencesService {
	preferences;

	constructor(private afs: Firestore) {
		this.preferences = collection(this.afs, 'preferences')
	}

	getAll() {
		return collectionData(this.preferences, {
			idField: 'id'
		}) as Observable<Preferences []>
	}

	create(preferences : Preferences) {
		return addDoc(this.preferences, preferences)
	}

	update(preferences : Partial<Preferences>) {
		const preferencesDocumentReference = doc(
			this.preferences,
			`preferences/${preferences.id}`
		)
		return updateDoc(preferencesDocumentReference, { ...preferences})
	}

	delete(id: string) {
		const preferencesDocumentReference = doc(this.preferences, `preferences/${id}`)
		return deleteDoc(preferencesDocumentReference)
	}
}