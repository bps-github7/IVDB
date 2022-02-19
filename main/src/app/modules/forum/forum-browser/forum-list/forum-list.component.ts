import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import * as fromForum from 'src/app/store/reducers/forum.reducer';
import * as forumActions from 'src/app/store/actions/forum.actions';
import { select, Store } from '@ngrx/store';
import { selectForumFamily } from 'src/app/store/selectors/forum.selector';

@Component({
  selector: 'forum-list',
  templateUrl: './forum-list.component.html',
  styleUrls: ['./forum-list.component.sass']
})
export class ForumListComponent implements OnInit {
	/* wanted to make this a dumb component, as we should architecturally
	but it turned out to be too much of a pain. not the end of the world, bend the rules
	*/
	@Input() family : string;
	forums$ : Observable<any>


  constructor(private forumStore : Store<fromForum.State>) { }

  ngOnInit(): void {
		this.forumStore.dispatch( forumActions.readForum() )
		this.forums$ = this.forumStore.pipe(select(selectForumFamily(this.family)));
	}

}
