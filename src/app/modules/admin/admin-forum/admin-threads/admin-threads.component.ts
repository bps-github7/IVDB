import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as fromThread from 'src/app/store/reducers/thread.reducer';
import * as threadActions from 'src/app/store/actions/thread.actions';
import { selectThreadByForumAndTitleSubstring } from 'src/app/store/selectors/thread.selector';


@Component({
  selector: 'admin-threads',
  templateUrl: './admin-threads.component.html',
  styleUrls: ['./admin-threads.component.sass']
})
export class AdminThreadsComponent implements OnInit {
	filteredThread$: any;
	threads$: any;

  constructor(private threadStore : Store<fromThread.State>) { }

	ngOnInit(): void {
		this.filteredThread$ = this.threads$ =  this.threadStore.select(fromThread.selectAll)	
		this.threadStore.dispatch( threadActions.readThreads() );
	}

	filter(query: string) {
		console.log(query)
		// this.filteredThread$ = (query) ?
		// this.threadStore.pipe(select(selectThreadByForumAndTitleSubstring(query))) :
		// this.threads$;
	}
}
