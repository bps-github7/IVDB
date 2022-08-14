import { exhaustMap } from 'rxjs/operators';
// angular core stuff + ngrx 
import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { Actions, createEffect, ofType } from "@ngrx/effects";

//firestore + rxjs
import { Firestore, collectionData, collection, DocumentData  } from "@angular/fire/firestore";
import { switchMap, mergeMap, map } from "rxjs/operators";

import { of } from "rxjs";

// our model and actions
import { VideogameConsole } from "src/app/models/content/videogame-console.model";
import * as videogameConsoleActions from '../actions/videogame-console.actions'

@Injectable()
export class VideogameConsoleEffects {

	consoles$: Observable<DocumentData>;

	constructor(private actions$: Actions, private afs : Firestore) {
		/*
		new syntax for getting firestore document	
			const collection = collection(firestore, 'items');
    	this.item$ = collectionData(collection);
		*/
		const consoles_collection = collection(this.afs, 'consoles')
		this.consoles$ = collectionData(consoles_collection)

	}
			
		
/* wonder if this is solution to all this boilerplate NgRx crap
	create angular firestore interface, 

		- construct collection , with datatype passed in 

		- getAll() -> collection data as Observable<type []>
		- get(id : string) : -> docData({id})
		- create(data : datatype) addDoc(data)
		- update
		- delete 
		see here: https://betterprogramming.pub/angular-13-firebase-crud-tutorial-with-angularfire-7-2d6980dcc091

	these effects have been notoriously buggy and hard to work with,
	perhaps not meant to be doing it this way after all.

	ngrx was supposed to simplify , not doing that here

*/

	query$ = createEffect(() => this.actions$.pipe(
		ofType(videogameConsoleActions.readVideogameConsole),
		exhaustMap(() => this.consoles$.valueChanges().pipe(
			map((videogameConsoles) => videogameConsoleActions.readVideogameConsoleSuccess({videogameConsoles}))
		))
	))

	create$ = createEffect(() => this.actions$.pipe(
		ofType(videogameConsoleActions.createVideogameConsole),
		switchMap(data => {
			const {type, ...payload} = data
			const ref = this.afs.doc<VideogameConsole>(`consoles/${data.id}`);
			return from(ref.set(payload));
		}),
		map(() => videogameConsoleActions.createVideogameConsoleSuccess())
	))



	update$ = createEffect(() => this.actions$.pipe(
		ofType(videogameConsoleActions.updateVideogameConsole),
		map((action) => action),
		switchMap(console => {
			const ref = this.afs.doc<VideogameConsole>(`consoles/${console.id}`)
			return from(ref.update({id : console.id,  ...console.data}))
		}),
		map(() => videogameConsoleActions.updateVideogameConsoleSuccess())
	))

	delete$ = createEffect(() => this.actions$.pipe(
		ofType(videogameConsoleActions.deleteVideogameConsole),
		map(action => action),
		switchMap(action => {
			const ref = this.afs.doc<VideogameConsole>(`consoles/${action.id}`)
			return from(ref.delete())
		}),
		map(()=> videogameConsoleActions.deleteVideogameConsoleSuccess())
	))
}