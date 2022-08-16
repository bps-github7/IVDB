import { GameInfo } from 'src/app/models/content/game-info.model';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Firestore, collectionData } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc, updateDoc } from '@firebase/firestore';

@Injectable()
export class GameInfoService {
	gameInfo;

	constructor(private afs: Firestore) {
		this.gameInfo = collection(this.afs, 'game-info')
	}

	getAll() {
		return collectionData(this.gameInfo, {
			idField: 'id'
		}) as Observable<GameInfo []>
	}

	create(gameInfo : GameInfo) {
		return addDoc(this.gameInfo, gameInfo)
	}

	update(gameInfo : Partial<GameInfo>) {
		const gameInfoDocumentReference = doc(
			this.gameInfo,
			`game-info/${gameInfo.id}`
		)
		return updateDoc(gameInfoDocumentReference, { ...gameInfo})
	}

	delete(id: string) {
		const gameInfoDocumentReference = doc(this.gameInfo, `game-info/${id}`)
		return deleteDoc(gameInfoDocumentReference)
	}
}