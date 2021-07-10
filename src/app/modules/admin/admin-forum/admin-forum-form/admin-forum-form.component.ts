import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Forum } from 'src/app/models/content/forum.model';
import * as fromForum from 'src/app/store/reducers/forum.reducer';
import * as fromForumInfo from 'src/app/store/reducers/forum-info.reducer';

import * as forumActions from 'src/app/store/actions/forum.actions';
import * as forumInfoActions from 'src/app/store/actions/forum-info.actions';
import { getFamily } from 'src/app/store/selectors/forum-info.selector';
import { selectEntity, getForumByParam } from 'src/app/store/selectors/forum.selector';

import v4 from 'uuid';

@Component({
  selector: 'admin-forum-form',
  templateUrl: './admin-forum-form.component.html',
  styleUrls: ['./admin-forum-form.component.sass']
})
export class AdminForumFormComponent implements OnInit {
	
	forumInfo$ : Observable<any>;
	forumFamilies$: Observable<any>;
	// forum_prefixes$: Observable<any>;
	// forum_types$: Observable<any>;

	// variables for storing the forum to update
	forum$ : Observable<any>;
	forum: Forum;
	id: string;

	disableDeleteButton: boolean;

	constructor(			
			private forumInfoStore: Store<fromForumInfo.State>,
			private forumStore : Store<fromForum.State>,
			private router : Router,
			private route : ActivatedRoute) { }

	ngOnInit(): void {
		this.forumInfo$ = this.forumInfoStore.select(fromForumInfo.selectAll)
		this.forumInfoStore.dispatch( forumInfoActions.readForumInfo() );
		this.forumFamilies$ = this.forumInfoStore.select(getFamily("family"))
		// this.forum_prefixes$ =  this.forumInfoStore.select(getFamily("prefix"))
		// this.forum_types$ =  this.forumInfoStore.select(getFamily("type"))
		this.forumStore.dispatch( forumActions.readForum() );
		if (this.route.snapshot.paramMap.get('forumId') === "new") {

			//  if that's the case, we need default values for forum, to avoid errors with NgModel
			this.forum = { id : "",	creator : "",	title : "",	description : "",	family: "" }

			// disable the delete button because we can't delete a forum that doesnt exist yet
			this.disableDeleteButton = true;
		
		} else {
		
			// read the route param id and get forum object which matches 
			this.forum$ = this.forumStore.pipe(select( getForumByParam ))

			// unwrap the observable
			this.forum$.subscribe((response : Forum) => this.forum = response);	
		
			// we can delete the forum because now we have an id value of something in the database
			this.disableDeleteButton = false;
		}
	}

	save(forum) {
		if(this.id) {
			this.forumStore.dispatch( forumActions.updateForum({id : this.id, data : forum }) )
			this.router.navigate(['/admin/forum']);	
		} else {
			this.forumStore.dispatch(forumActions.createForum({ id : v4(), ...forum}));	
			this.router.navigate(['/admin/forum']);	
		}
		}

	delete() {
		if (confirm('Are you sure that you want to delete this forum?')) {
			this.forumStore.dispatch( forumActions.deleteForum({ id : this.id}) )
			this.router.navigate(['/admin/forum']);
		}			
		return;
	}
}
