import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivationStart } from '@angular/router';
import { select, Store } from '@ngrx/store';
import * as fromForum from 'src/app/store/reducers/forum.reducer';
import * as forumActions from 'src/app/store/actions/forum.actions';
import { getForumByIdParam, getForumByTitleParam } from 'src/app/store/selectors/forum.selector';
import { Forum } from 'src/app/models/content/forum.model';



@Component({
  selector: 'app-forum-view',
  templateUrl: './forum-view.component.html',
  styleUrls: ['./forum-view.component.sass']
})
export class ForumViewComponent implements OnInit {

	forum$ : Observable<any>;
	forum : Forum;

  constructor(private forumStore : Store<fromForum.State>) { }

  ngOnInit(): void {
		// read forums from database
		this.forumStore.dispatch( forumActions.readForum() )		
		this.forum$ =	this.forumStore.pipe(select(getForumByTitleParam))
		// this.forum$.subscribe((response : Forum) => this.forum = response)
	}

}
