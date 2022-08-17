import { Injectable } from "@angular/core";
import { from } from "rxjs";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Content } from "src/app/models/content/content.model";
import * as contentActions from '../actions/content.actions'
import { switchMap, map, exhaustMap } from "rxjs/operators";
import { ContentService } from "src/app/services/persistence/content.service";


@Injectable()
export class ContentEffects {

	constructor(private actions$: Actions, private afs : ContentService) {}

		query$ = createEffect(() => this.actions$.pipe(
			ofType(contentActions.readContent),
			exhaustMap(() => this.afs.getAll().pipe(
					map((contents) => contentActions.readContentSuccess({contents}))
			))
		))

	create$ = createEffect(() => this.actions$.pipe(
		ofType(contentActions.createContent),
		map(data => {
			const {type, ...content} = data
			this.afs.create(content)
		}),
		map(() => contentActions.createContentSuccess())
	))



	update$ = createEffect(() => this.actions$.pipe(
		ofType(contentActions.updateContent),
		map((action) => action),
		map(content => {
			this.afs.update(content)
		}),
		map(() => contentActions.updateContentSuccess())
	))

	delete$ = createEffect(() => this.actions$.pipe(
		ofType(contentActions.deleteContent),
		map(action => action),
		map(content => {
			this.afs.delete(content.id)
		}),
		map(()=> contentActions.deleteContentSuccess())
	))
}