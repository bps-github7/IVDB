import { Review } from "src/app/models";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Firestore, collectionData } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc, updateDoc } from '@firebase/firestore';

@Injectable()
export class ReviewService {
	reviews;

	constructor(private afs: Firestore) {
		this.reviews = collection(this.afs, 'reviews')
	}

	getAll() {
		return collectionData(this.reviews, {
			idField: 'id'
		}) as Observable<Review []>
	}

	create(review : Review) {
		return addDoc(this.reviews, review)
	}

	update(review : Partial<Review>) {
		const preferencesDocumentReference = doc(
			this.reviews,
			`reviews/${review.id}`
		)
		return updateDoc(preferencesDocumentReference, { ...review})
	}

	delete(id: string) {
		const preferencesDocumentReference = doc(this.reviews, `reviews/${id}`)
		return deleteDoc(preferencesDocumentReference)
	}
}