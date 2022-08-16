import { Game } from 'src/app/models/content/game.model';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Firestore, collectionData } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc, updateDoc } from '@firebase/firestore';

@Injectable()
export class GameService {
	games;

	constructor(private afs: Firestore) {
		this.games = collection(this.afs, 'games')
	}

	getAll() {
		return collectionData(this.games, {
			idField: 'id'
		}) as Observable<Game []>
	}

	create(game : Game) {
		return addDoc(this.games, game)
	}

	update(game : Partial<Game>) {
		const gameDocumentReference = doc(
			this.games,
			`games/${game.id}`
		)
		return updateDoc(gameDocumentReference, { ...game})
	}

	delete(id: string) {
		const gameDocumentReference = doc(this.games, `games/${id}`)
		return deleteDoc(gameDocumentReference)
	}
}