import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { User } from "src/app/models/user/user.model";
import * as userActions from '../actions/user.actions'
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { switchMap, mergeMap, map, exhaustMap } from "rxjs/operators";
import 'rxjs/add/observable/fromPromise';


@Injectable()
export class UserEffects {

	constructor(private actions$: Actions, private afs : AngularFirestore) {}

		query$ = createEffect(() => this.actions$.pipe(
			ofType(userActions.readUsers),
			exhaustMap(() => this.afs.collection<User>('users').valueChanges().pipe(
					map((users) => userActions.readUsersSuccess({users}))
			))
		))


	create$ = createEffect(() => this.actions$.pipe(
		ofType(userActions.createUser),
		switchMap(data => {
			const {type, ...payload} = data
			const ref = this.afs.doc<User>(`users/${data.id}`);
			return Observable.fromPromise(ref.set(payload));
		}),
		map(() => userActions.createUserSuccess())
	))

	update$ = createEffect(() => this.actions$.pipe(
		ofType(userActions.updateUser),
		map((action) => action),
		switchMap(user => {
			const ref = this.afs.doc<User>(`users/${user.id}`)
			return Observable.fromPromise(ref.update({id : user.id,  ...user.data}))
		}),
		map(() => userActions.updateUserSuccess())
	))

	delete$ = createEffect(() => this.actions$.pipe(
		ofType(userActions.deleteUser),
		map(action => action),
		switchMap(action => {
			const ref = this.afs.doc<User>(`users/${action.id}`)
			return Observable.fromPromise(ref.delete())
		}),
		map(()=> userActions.deleteUserSuccess())
	))
}