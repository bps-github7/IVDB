import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { v4 } from 'uuid';
import { AppState } from 'src/app/store';


// examine these imports closer
import * as gameActions from 'src/app/store/actions/game.actions';
import * as fromGame from 'src/app/store/reducers/game.reducer';
import * as gameInfoActions from 'src/app/store/actions/game-info.actions'; 
import * as fromGameInfo from 'src/app/store/reducers/game-info.reducer';
import { getFamily } from 'src/app/store/selectors/game-info.selector';


import { getGameByParam, selectEntity } from 'src/app/store/selectors/game.selector';
import { Game } from 'src/app/models/content/game.model';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';


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
	disableDeleteButton: boolean = true;
	
	constructor(
		private gameInfoStore: Store<fromGameInfo.State>,
		private gameStore : Store<fromGame.State>,
		private route : ActivatedRoute,
		private router : Router,
		private fb : FormBuilder		
		) { }

	ngOnInit(): void {
		
		// getting game and gameInfo data from the store.

		this.game$ = this.gameStore.select(fromGame.selectAll)
		this.gameStore.dispatch( gameActions.readGames() );
		this.gameInfoStore.dispatch( gameInfoActions.readGameInfo() )

		this.game$ = this.gameStore.pipe(select( getGameByParam ))
		this.categories$ = this.gameInfoStore.pipe(select( getFamily("category") ));
		this.creators$ = this.gameInfoStore.pipe(select( getFamily("creator") ));
		this.platforms$ = this.gameInfoStore.pipe(select( getFamily("platform") ))

		this.form = this.fb.group({
			title : ["", Validators.required],
			description : ["", Validators.required],
			price : [0, Validators.min(0)],
			imageUrl : [""],
			categories : this.fb.array([]),
			creators :this.fb.array([]), 
			platforms :this.fb.array([]), 
			consoles :this.fb.array([]) 
		})		

		//  cheating w/ activated route to see if we are updating or creating a new game
		if (this.route.snapshot.paramMap.get('gameId') !== "new") {
			this.id = this.route.snapshot.paramMap.get('gameId')
			this.disableDeleteButton = false
		}

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

	/* 
	TODO:
	1. test both these methods
	2. form validation
	3. carefully control whether either control is clickable
	4. add safeguards in method (in case a button is clicked when it shouldnt have been able to be clicked)	
	*/
	save(game) {
		console.log(game)
		if(this.id) {
			console.log("this happens")
			this.gameStore.dispatch( gameActions.updateGame({id : this.id, data : game}) )
			this.router.navigate(['../../']);	
		} else {
			console.log("that happens")
			this.gameStore.dispatch(gameActions.createGame({ id : v4(), ...game}));	
			this.router.navigate(['../']);	
		}
		}

	delete() {
		if (confirm('Are you sure that you want to delete this game?')) {
			this.gameStore.dispatch( gameActions.deleteGame({ id : this.id}) )
			this.router.navigate(['/admin/game']);
		}			
		return;
	}

}
