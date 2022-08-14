import { ForumInfo } from 'src/app/models/content/forum-info.model';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Firestore, collectionData } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc, updateDoc } from '@firebase/firestore';

@Injectable()
export class ForumInfoService {
	forumInfo;

	constructor(private afs: Firestore) {
		this.forumInfo = collection(this.afs, 'forum-info')
	}

	getAll() {
		return collectionData(this.forumInfo, {
			idField: 'id'
		}) as Observable<ForumInfo []>
	}

	create(forumInfo : ForumInfo) {
		return addDoc(this.forumInfo, forumInfo)
	}

	update(forumInfo : Partial<ForumInfo>) {
		const forumInfoDocumentReference = doc(
			this.forumInfo,
			`forum-info/${forumInfo.id}`
		)
		return updateDoc(forumInfoDocumentReference, { ...forumInfo})
	}

	delete(id: string) {
		const forumInfoDocumentReference = doc(this.forumInfo, `forum-info/${id}`)
		return deleteDoc(forumInfoDocumentReference)
	}
}