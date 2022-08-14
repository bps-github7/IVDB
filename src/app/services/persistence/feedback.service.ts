import { Feedback } from 'src/app/models/contrib/feedback.model';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Firestore, collectionData } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc, updateDoc } from '@firebase/firestore';

@Injectable()
export class FeedbackService {
	feedback;

	constructor(private afs: Firestore) {
		this.feedback = collection(this.afs, 'feedback')
	}

	getAll() {
		return collectionData(this.feedback, {
			idField: 'id'
		}) as Observable<Feedback []>
	}

	create(feedback : Feedback) {
		return addDoc(this.feedback, feedback)
	}

	update(feedback : Partial<Feedback>) {
		const feedbackDocumentReference = doc(
			this.feedback,
			`feedback/${feedback.id}`
		)
		return updateDoc(feedbackDocumentReference, { ...feedback})
	}

	delete(id: string) {
		const feedbackDocumentReference = doc(this.feedback, `feedback/${id}`)
		return deleteDoc(feedbackDocumentReference)
	}
}