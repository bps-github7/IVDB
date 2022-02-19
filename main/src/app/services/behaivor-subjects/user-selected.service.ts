import { Injectable } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserSelectedService {

  constructor() { }


	// TODO / DOUBLE BACK: will this work as a generic service that takes any observable?
	// dk why not, and if yes, we can stop making all these type specific services that all do the same thing.

	private _selected: BehaviorSubject<User> = new BehaviorSubject(null);

	public selected$ = this._selected.asObservable().pipe(filter(user  => !!user));
	
	select(obj : any) {
			 this._selected.next(obj);
	}
}
