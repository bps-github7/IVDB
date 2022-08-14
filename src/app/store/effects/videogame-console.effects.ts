import { exhaustMap } from 'rxjs/operators';
// angular core stuff + ngrx 
import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { Actions, createEffect, ofType } from "@ngrx/effects";

//firestore + rxjs
import { Firestore, collectionData, docData } from '@angular/fire/firestore';
import { switchMap, mergeMap, map } from "rxjs/operators";

import { of } from "rxjs";

// our model and actions
import { VideogameConsole } from "src/app/models/content/videogame-console.model";
import * as videogameConsoleActions from '../actions/videogame-console.actions'
import {
  CollectionReference,
  DocumentData,
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from '@firebase/firestore';


// P.O.C CRUD for firestore
class ConsolePersistenceInterface {
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

@Injectable()
export class VideogameConsoleEffects {

	consoles$: Observable<DocumentData>;

	constructor(
		private actions$: Actions, 
		private afs : ConsolePersistenceInterface) {}
	
	query$ = createEffect(() => this.actions$.pipe(
		ofType(videogameConsoleActions.readVideogameConsole),
		exhaustMap(() => this.afs.getAll().pipe(
			map((videogameConsoles) => videogameConsoleActions.readVideogameConsoleSuccess({videogameConsoles}))
		))
	))

	create$ = createEffect(() => this.actions$.pipe(
		ofType(videogameConsoleActions.createVideogameConsole),
		// is map the operator we want for the following 3 methods???
		map(data => {
			const {type, ...payload} = data
			this.afs.create(payload)
		}),
		map(() => videogameConsoleActions.createVideogameConsoleSuccess())
	))

	update$ = createEffect(() => this.actions$.pipe(
		ofType(videogameConsoleActions.updateVideogameConsole),
		map((action) => action),
		map(console => {
			this.afs.update(console)
		}),
		map(() => videogameConsoleActions.updateVideogameConsoleSuccess())
	))

	delete$ = createEffect(() => this.actions$.pipe(
		ofType(videogameConsoleActions.deleteVideogameConsole),
		map(action => action),
		map(action => {
			this.afs.delete(action.id)
		}),
		map(()=> videogameConsoleActions.deleteVideogameConsoleSuccess())
	))
}	