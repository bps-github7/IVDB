import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { v4 } from 'uuid';


// examine these imports closer
import * as gameActions from 'src/app/store/actions/game.actions';
import * as fromGame from 'src/app/store/reducers/game.reducer';
import * as gameInfoActions from 'src/app/store/actions/game-info.actions'; 
import * as fromGameInfo from 'src/app/store/reducers/game-info.reducer';
import { selectGameInfoFamily } from 'src/app/store/selectors/game-info.selector';


import { selectGameByIdParam } from 'src/app/store/selectors/game.selector';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'admin-game-form',
  templateUrl: './admin-game-form.component.html',
  styleUrls: ['./admin-game-form.component.sass']
})
export class AdminGameFormComponent implements OnInit {

	gameInfo$ : Observable<any>;
	categories$: Observable<any>;
	creators$: Observable<any>;
	platforms$: Observable<any>;
	game$ : Observable<any>;
	form: FormGroup;
	id: string;
	disableDeleteButton: boolean = false;
	
	constructor(
		private gameInfoStore: Store<fromGameInfo.State>,
		private gameStore : Store<fromGame.State>,
		private route : ActivatedRoute,
		private router : Router,
		private fb : FormBuilder		
		) { }

	ngOnInit() {

		
		// component depends on route param to be able to tell wether we want to create or update a game.
		this.id = this.route.snapshot.paramMap.get('gameId').replace(" ","");	
		if (this.id === "new") {
			this.disableDeleteButton = true;
			delete this.id;			
		}

		// getting game and gameInfo data from the store.
		this.gameStore.dispatch( gameActions.readGames() );
		this.gameInfoStore.dispatch( gameInfoActions.readGameInfo() )
		this.categories$ = this.gameInfoStore.pipe(select( selectGameInfoFamily("category") ));
		this.creators$ = this.gameInfoStore.pipe(select( selectGameInfoFamily("creator") ));
		this.platforms$ = this.gameInfoStore.pipe(select( selectGameInfoFamily("platform") ))
		


		// precaution to prevent form from being blank because
		// the form data was loaded after changeDetection was completed
		//TODO: get this working. need to refresh to get update data 
		
	
		this.game$ = this.gameStore.pipe(select( selectGameByIdParam ))
		this.form = this.fb.group({
			title : ["", Validators.required],
			description : ["", Validators.required],
			price : [0, Validators.min(0)],
			imageUrl : [
				"", 
				Validators.required, 
				// Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)
			],
			categories : [],
			creators :[], 
			platforms :[], 
			consoles :[]		
		});
	}
	
	get title () {
		return this.form.get('title');
	}

	get description () {
		return this.form.get('description');
	}

	get price () {
		return this.form.get('price');
	}

	get imageUrl () {
		return this.form.get('imageUrl');
	}

	get categories () {
		return this.form.get('categories');
	}

	get creators () {
		return this.form.get('creators');
	}

	get platforms () {
		return this.form.get('platforms');
	}

	get consoles () {
		return this.form.get('consoles');
	}

	save(game) {
		/* Manager which decides whether we want to create or update a game
				then dispatches the appropriate action and routes away from submitted form.
		*/
		if (this.id) {
			this.gameStore.dispatch( gameActions.updateGame({id : this.id, data : game}) )
			this.router.navigate(['/admin/game']);		
		}
		else {
			this.gameStore.dispatch(gameActions.createGame({ id : v4(), ...game}));	
			this.router.navigate(['/admin/game']);			
		}
	}

	delete() {		
		// just a safety check: cannot delete a game with no id
		if (this.id === "new" || !this.id) {
			return;
		}

		if (confirm('Are you sure that you want to delete this game?')) {
			this.gameStore.dispatch( gameActions.deleteGame({ id : this.id}) )
			this.router.navigate(['/admin/game']);
		}			
		return;
	}

}
