import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { VideogameConsole } from 'src/app/models/content/videogame-console.model';

@Injectable({
  providedIn: 'root'
})
export class ConsoleSelectedService {
	/* game info and videogame console selected services are custom behaivor subjects
		they allow us to update an object of the type game info or videogame console,
		communicating the object data from one dumb component to another (without manual event bubbleling)
	*/
	private _selected: BehaviorSubject<VideogameConsole> = new BehaviorSubject(null);

	public selected$ = this._selected.asObservable().pipe(filter(videogameConsole => !!videogameConsole));
	meCVideogameConsole
	
	select(videogameConsole : VideogameConsole) {
			 this._selected.next(videogameConsole);
	}

}
