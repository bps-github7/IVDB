import { Rating } from "src/app/models";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Firestore, collectionData } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc, updateDoc } from '@firebase/firestore';

@Injectable()
export class RatingService {
	ratings;

	constructor(private afs: Firestore) {
		this.ratings = collection(this.afs, 'ratings')
	}

	getAll() {
		return collectionData(this.ratings, {
			idField: 'id'
		}) as Observable<Rating []>
	}

	create(rating : Rating) {
		return addDoc(this.ratings, rating)
	}

	update(rating : Partial<Rating>) {
		const ratingsDocumentReference = doc(
			this.ratings,
			`ratings/${rating.id}`
		)
		return updateDoc(ratingsDocumentReference, { ...rating})
	}

	delete(id: string) {
		const ratingsDocumentReference = doc(this.ratings, `ratings/${id}`)
		return deleteDoc(ratingsDocumentReference)
	}
}