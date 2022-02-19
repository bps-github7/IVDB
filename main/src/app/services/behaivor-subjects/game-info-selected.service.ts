import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { GameInfo } from 'src/app/models/content/game-info.model';

@Injectable({
  providedIn: 'root'
})
export class GameInfoSelectedService {

	private _selected: BehaviorSubject<GameInfo> = new BehaviorSubject(null);

	public selected$ = this._selected.asObservable().pipe(filter(gameInfo => !!gameInfo));
	
	select(obj : GameInfo) {
			 this._selected.next(obj);
	}
}

