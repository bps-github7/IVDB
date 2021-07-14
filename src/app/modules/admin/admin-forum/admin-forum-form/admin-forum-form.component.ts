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
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'admin-forum-form',
  templateUrl: './admin-forum-form.component.html',
  styleUrls: ['./admin-forum-form.component.sass']
})
export class AdminForumFormComponent implements OnInit {
	
	forumInfo$ : Observable<any>;
	forumFamilies$: Observable<any>;
	
	// variables for storing the forum to update
	forum$ : Observable<any>;
	id: string;
	form : FormGroup;

	disableDeleteButton: boolean;

	constructor(			
			private fb : FormBuilder,
			private forumInfoStore: Store<fromForumInfo.State>,
			private forumStore : Store<fromForum.State>,
			private router : Router,
			private route : ActivatedRoute) { }

	ngOnInit(): void {
		// component depends on route param to be able to tell wether we want to create or update a forum.
		this.id = this.route.snapshot.paramMap.get('forumId').replace(" ","");	
		if (this.id === "new") {
			this.disableDeleteButton = true;
			delete this.id;			
		}

		this.forumInfo$ = this.forumInfoStore.select(fromForumInfo.selectAll)
		this.forumInfoStore.dispatch( forumInfoActions.readForumInfo() );
		this.forumFamilies$ = this.forumInfoStore.select(getFamily("family"))

		this.forumStore.dispatch( forumActions.readForum() );

		this.forum$ = this.forumStore.pipe(select( getForumByParam ))
		this.form = this.fb.group({
			title : ["", Validators.required],
			description : ["", Validators.required],
			family : ["", Validators.required],
		});
	
	}

	get title () {
		return this.form.get('title');
	}

	get description () {
		return this.form.get('description');
	}

	
	get family () {
		return this.form.get('family');
	}

	save(forum) {
		/* Manager method which decides whether we are creating or updating
			then dispatches the appropriate action and routes away from the submitted form.
		*/
		if(this.id) {
			this.forumStore.dispatch( forumActions.updateForum({id : this.id, data : forum }) )
			this.router.navigate(['/admin/forum']);	
		} 
		else {
			this.forumStore.dispatch(forumActions.createForum({ id : v4(), ...forum}));	
			this.router.navigate(['/admin/forum']);	
		}
	}



	delete() {
		
		if (this.id === "new" || !this.id) {
			return;
		}
		
		if (confirm('Are you sure that you want to delete this forum?')) {
			this.forumStore.dispatch( forumActions.deleteForum({ id : this.id}) )
			this.router.navigate(['/admin/forum']);
		}			
		return;
	}
}
