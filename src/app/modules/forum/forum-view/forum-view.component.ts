import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivationStart } from '@angular/router';
import { select, Store } from '@ngrx/store';
import * as fromForum from 'src/app/store/reducers/forum.reducer';
import * as forumActions from 'src/app/store/actions/forum.actions';
import * as forumSelectors from 'src/app/store/selectors/forum.selector';
import { Forum } from 'src/app/models/content/forum.model';



@Component({
  selector: 'app-forum-view',
  templateUrl: './forum-view.component.html',
  styleUrls: ['./forum-view.component.sass']
})
export class ForumViewComponent implements OnInit {

	forumId : string;
	forum$ : Observable<any>;
	forum : Forum;

  constructor(
		private route : ActivationStart,
		private forumStore : Store<fromForum.State>
		) { }

  ngOnInit(): void {
		
		// read forums from database
		this.forumStore.dispatch( forumActions.readForum() )		
		
		// read the forumId from foute params
		this.forumId = this.route.snapshot.paramMap.get('id');
		
		// get the specific forum currently under examination from the store
		this.forum$ = this.forumStore.pipe(select( forumSelectors.selectEntity( this.forumId ) ))
	
		//unwrap the observable => subscribe to it
		this.forum$.subscribe((response : Forum) => this.forum = response);
	
		// using forum name, get threads with same process used above -> Store<fromThread.State>
	
	}

}
