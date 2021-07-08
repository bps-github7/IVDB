import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
// import { map } from 'rxjs/operators';
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
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

interface buildInfoObj {
	type : string;
	formControlName : string,
	options : string [] | Observable<any>
	config : any 
}
interface buildInfo  {
	title : buildInfoObj, 
	price : buildInfoObj,
	description : buildInfoObj,
	categories ?: buildInfoObj,
	creators ?: buildInfoObj,
	platforms ?: buildInfoObj,
	consoles ?: buildInfoObj
}

@Component({
  selector: 'admin-game-form',
  templateUrl: './admin-game-form.component.html',
  styleUrls: ['./admin-game-form.component.sass']
})
export class AdminGameFormComponent implements OnInit {

	gameInfo$ : Observable<any>;
	game_categories$: Observable<any>;
	game_creators$: Observable<any>;
	game_platforms$: Observable<any>;
	game$ : Observable<any>;
	game: Game;
	id: string;
	disableDeleteButton: boolean
	
	form: FormGroup;
	initialState  = {
		title : [''],
		price : [0],
		desciprtion : [''],
		imageUrl : [''],
		categories : this.fb.array([]),
		creators : this.fb.array([]),
		platforms : this.fb.array([]),
		consoles : this.fb.array([])
	}
	buildInfo  = [
		{
			type : "text",
			formControlName : "title",
			config : {
				placeholder : "enter a title for this game"
			}
		},
		{
			type : "textarea",
			formControlName : "description",
			config : {
				placeholder : "enter a short description for this game"
			}
		},
		{
			type : "text",
			formControlName : "imageUrl",
			config : {
				placeholder : "enter url for a image cover"
			}
		}
	]
	asyncBuildInfo; 
	
	constructor(
		private gameInfoStore: Store<fromGameInfo.State>,
		private gameStore : Store<fromGame.State>,
		private route : ActivatedRoute,
		private router : Router,
		private fb : FormBuilder		
		) { }

	ngOnInit(): void {

		this.gameInfo$ = this.gameInfoStore.select(fromGameInfo.selectAll)
		this.gameInfoStore.dispatch( gameInfoActions.readGameInfo() );

		this.gameStore.dispatch( gameActions.readGames() );
		if (this.route.snapshot.paramMap.get('id') === "new") {
			// this.game = { id : "", title : "", price : 0, description : "", categories : [], creators : [], platforms: [], consoles : []};
			this.disableDeleteButton = true;
			this.form = this.fb.group(this.initialState)
		} 
		else {
			this.game$ = this.gameStore.pipe(select( getGameByParam ))
			this.game$.subscribe((response : Game) => this.game = response);	
			console.log("hey this executed!")
			if (this.game) {
				this.initialState  = {
					title : [this.game.title],
					price : [this.game.price],
					desciprtion : [this.game.description],
					imageUrl : [this.game.imageUrl],
					categories : this.fb.array(this.game.categories),
					creators : this.fb.array(this.game.creators),
					platforms : this.fb.array(this.game.platforms),
					consoles : this.fb.array(this.game.consoles)
				}
				console.log("and also this!")				
		
			}
			this.form = this.fb.group(this.initialState)
		
			this.disableDeleteButton = false;
		}

		this.asyncBuildInfo = [	
		{
			type : "multiple select async",
			formControlName : "categories",
			options : this.gameInfoStore.select(getFamily("category")),
			config : {
				placeholder : "choose categories for this game"
			}
		},
		{
			type : "multiple select async",
			formControlName : "tags",
			options : this.gameInfoStore.select(getFamily("creator")),
			config : {
				placeholder : "add tags for this watchlist"
			}
		},
		{
			type : "multiple select async",
			formControlName : "tags",
			options : this.gameInfoStore.select(getFamily("platform")),	
			config : {
				placeholder : "add tags for this watchlist"
			}
		}
		//  {
		// 	type : "multiple select",
		// 	formControlName : "tags",
		// 	options : ["games", "recent release", "aniversery"],
		// 	config : {
		// 		placeholder : "add tags for this watchlist"
		// 	}
		// }
		]

		this.game_categories$ = this.gameInfoStore.select(getFamily("category"))
		this.game_creators$ = this.gameInfoStore.select(getFamily("creator"))
		this.game_platforms$ = this.gameInfoStore.select(getFamily("platform"))


		
	}

	save(game) {
		if(this.id) {
			this.gameStore.dispatch( gameActions.updateGame({id : this.id, data : game }) )
			this.router.navigate(['/admin/game']);	
		} else {
			this.gameStore.dispatch(gameActions.createGame({ id : v4(), ...game}));	
			this.router.navigate(['/admin/game']);	
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
