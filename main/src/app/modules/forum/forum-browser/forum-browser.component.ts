import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';


import * as fromForumInfo from 'src/app/store/reducers/forum-info.reducer';
import * as forumInfoActions from 'src/app/store/actions/forum-info.actions';
import { Observable } from 'rxjs';
import { selectForumInfoFamily } from 'src/app/store/selectors/forum-info.selector';
import { ForumInfo } from 'src/app/models/content/forum-info.model';
import { map } from 'rxjs/operators';


@Component({
  selector: 'forum-browser',
  templateUrl: './forum-browser.component.html',
  styleUrls: ['./forum-browser.component.sass']
})
export class ForumBrowserComponent implements OnInit {

	forumFamilies$ : Observable<any>
	forums : any 

  constructor(
		private forumInfoStore : Store<fromForumInfo.State>
		) { }

  ngOnInit(): void {
		this.forumInfoStore.dispatch( forumInfoActions.readForumInfo() );
		this.forumFamilies$ = this.forumInfoStore.pipe(select(selectForumInfoFamily("family")))
		// this.forumFamilies$.pipe(map((item : ForumInfo ) => this.forums[item.title] = this.forumStore.pipe(select(forumSelectors.getFamily(item.title)))))
		
	}

}
