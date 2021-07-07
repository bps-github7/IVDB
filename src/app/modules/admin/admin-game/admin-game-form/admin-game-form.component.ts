import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';

// examine these imports closer
import * as gameActions from 'src/app/store/actions/game.actions';
import * as fromGame from 'src/app/store/reducers/game.reducer';
import * as gameInfoActions from 'src/app/store/actions/game-info.actions'; 
import * as fromGameInfo from 'src/app/store/reducers/game-info.reducer';
import { getFamily } from 'src/app/store/selectors/game-info.selector';


import { v4 } from 'uuid';
import { selectEntity } from 'src/app/store/selectors/game.selector';
import { map, pluck, take } from 'rxjs/operators';
import { Game } from 'src/app/models/content/game.model';



// import { filter, map } from 'rxjs/operators';

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

	disableDeleteButton: boolean;

	constructor(
			
			private gameInfoStore: Store<fromGameInfo.State>,
			private gameStore : Store<fromGame.State>,
			private router : Router,
			private route : ActivatedRoute) { }

	ngOnInit(): void {
		this.gameInfo$ = this.gameInfoStore.select(fromGameInfo.selectAll)
		this.gameInfoStore.dispatch( gameInfoActions.readGameInfo() );

		this.game_categories$ = this.gameInfoStore.select(getFamily("category"))
		this.game_creators$ =  this.gameInfoStore.select(getFamily("creator"))
		this.game_platforms$ =  this.gameInfoStore.select(getFamily("platform"))

		// if (this.route.snapshot.paramMap.get('id'))
		this.id = this.route.snapshot.paramMap.get('id');

		// sketchy way of preventing some annoying errors.
		if(this.id === "new") {
			this.id = '';
			this.disableDeleteButton = true		

			this.game = {
				id : "",
				title : "",
				price : 0,
				description : "",
				imageUrl : "",
				categories : [],
				creators : [],
				platforms : [],
				consoles : []
			}
		}
	
		if (this.id != "new" && this.id.length > 1) {
			this.game$ = this.gameStore.select(selectEntity(this.id))
			this.game$.subscribe((response : Game) => this.game = response)
			this.disableDeleteButton = false
		}
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
