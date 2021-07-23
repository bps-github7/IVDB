import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Thread } from 'src/app/models/contrib/thread.model';

@Injectable({
  providedIn: 'root'
})
export class ThreadSelectedService {

	private _selected: BehaviorSubject<Thread> = new BehaviorSubject(null);

	public selected$ = this._selected.asObservable().pipe(filter(thread => !!thread));
	
	select(obj : Thread) {
			 this._selected.next(obj);
	}
}

