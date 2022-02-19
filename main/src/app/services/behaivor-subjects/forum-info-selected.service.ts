import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ForumInfo } from 'src/app/models/content/forum-info.model';

@Injectable({
  providedIn: 'root'
})
export class ForumInfoSelectedService {

	private _selected: BehaviorSubject<ForumInfo> = new BehaviorSubject(null);

	public selected$ = this._selected.asObservable().pipe(filter(ForumInfo => !!ForumInfo));
	
	select(obj : ForumInfo) {
			 this._selected.next(obj);
	}
}
