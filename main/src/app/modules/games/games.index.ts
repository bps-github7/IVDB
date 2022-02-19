import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { GameInfoEffects } from 'src/app/store';
import { GameEffects } from './../../store/effects/game.effects';
import { GameInfoReducer } from 'src/app/store/reducers/game-info.reducer';
import { GameReducer } from 'src/app/store/reducers/game.reducer';



@NgModule({
	declarations: [],
	imports: [
		StoreModule.forFeature('game', GameReducer),
		StoreModule.forFeature('gameInfo', GameInfoReducer),
		EffectsModule.forFeature([GameEffects]),
		EffectsModule.forFeature([GameInfoEffects])
	]
})
export class GameStoreModule { }
