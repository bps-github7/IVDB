import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Firestore, collectionData } from '@angular/fire/firestore';
import { Contribution } from "src/app/models/contrib/contribution.model";
import { addDoc, collection, deleteDoc, doc, updateDoc } from '@firebase/firestore';

@Injectable()
export class ContributionService {
	contributions;

	constructor(private afs: Firestore) {
		this.contributions = collection(this.afs, 'contributions')
	}

	getAll() {
		return collectionData(this.contributions, {
			idField: 'id'
		}) as Observable<Contribution []>
	}

	create(contrib: Contribution) {
		return addDoc(this.contributions, contrib)
	}

	update(contrib : Partial<Contribution>) {
		const contribDocumentReference = doc(
			this.contributions,
			`contributions/${contrib.id}`
		)
		return updateDoc(contribDocumentReference, { ...contrib})
	}

	delete(id: string) {
		const contribDocumentReference = doc(this.contributions, `contributions/${id}`)
		return deleteDoc(contribDocumentReference)
	}
}