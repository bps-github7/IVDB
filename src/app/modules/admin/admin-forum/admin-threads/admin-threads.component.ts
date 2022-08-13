import { selectForumFamily } from 'src/app/store/selectors/forum.selector';
import { reducers } from './../../../../store/reducers/index';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { v4 } from 'uuid';

import * as fromForumInfo from 'src/app/store/reducers/forum-info.reducer';
import * as forumInfoActions from 'src/app/store/actions/forum-info.actions';

import * as fromForum from 'src/app/store/reducers/forum.reducer';
import * as forumActions from 'src/app/store/actions/forum.actions';

import * as fromThread from 'src/app/store/reducers/thread.reducer';
import * as threadActions from 'src/app/store/actions/thread.actions';
import { selectThreadsByForum, selectThreadsByForumAndTitleSubstring } from 'src/app/store/selectors/thread.selector';
import { Forum, ForumInfo, Thread } from 'src/app/models';
import { selectForumInfoFamily } from 'src/app/store/selectors/forum-info.selector';
import { Observable } from 'rxjs';


@Component({
  selector: 'admin-threads',
  templateUrl: './admin-threads.component.html',
  styleUrls: ['./admin-threads.component.sass']
})
export class AdminThreadsComponent implements OnInit {


	// should really clean this up. how many of these are no longer of use?
	forumData : any = {};
	threadData : any={}
	forumInfoData: any;


	families$ : Observable<any>;
	forumFamilies : any;
	forumFamilyChoices : any={};

	chosenFamily : string;
	chosenForum: any;
	threadsSelected$ : Observable<any>;
	
	selectedThread: Thread;
	selectedForum: Forum;

	showForm: boolean = false;
	showOptions: boolean = false;


  constructor(
		private forumStore : Store<fromForum.State>,
		private forumInfoStore : Store<fromForumInfo.State>,
		private threadStore : Store<fromThread.State>) { }

	ngOnInit(): void {
		this.threadStore.dispatch( threadActions.readThreads() );
		this.forumStore.dispatch(  forumActions.readForum() );
		this.forumInfoStore.dispatch( forumInfoActions.readForumInfo() );

		// Question : why would this be undefined if we are creating an obejct? 
		// perhaps we need to force a re render whenever something happens with the form (vauge)

		this.forumInfoData = {
			"families" : this.forumInfoStore.select( selectForumInfoFamily("family") ),
			"prefixes" : this.forumInfoStore.select( selectForumInfoFamily("prefix") ),
			"types" : this.forumInfoStore.select( selectForumInfoFamily("type") ) 			
		}
		this.families$ = this.forumInfoStore.select( selectForumInfoFamily("family") )
		this.families$.subscribe(response => this.forumFamilies = response);


		this.forumFamilies.map((item) => this.forumData[item.title] = this.forumStore.select( selectForumFamily(item.title) ));
		this.forumFamilyChoices = Object.keys(this.forumData);

		
	}

	forumSelected(forum : Forum) {
		this.selectedForum = forum;
		this.threadsSelected$	= this.threadStore.select( selectThreadsByForum(forum.title) )
	}

	threadSelected(thread : Thread) {
		this.selectedThread = thread;
		this.showOptions = true
		// this.showForm = true;
	}

	filterThreads(event) {

	}

	// TODO: make showing and hiding of form after form submission more streamlined - is there a way to integrate this behiavor into the form? it seems pretty default desirable...
	openCreateThreadForm() {
		this.showForm = true;
		// do we have a better way to ensure there is no existing data on the form when we open it for create event
		this.selectedThread = undefined;
	}

	createThread(thread : Thread) {
		this.threadStore.dispatch( threadActions.createThread({id : v4(), ...thread}) )
		this.showForm = !this.showForm;
	}

	updateThread(thread : Partial<Thread>) {
		this.threadStore.dispatch( threadActions.updateThread({id : thread.id, data : thread}) );
		this.showForm = !this.showForm;
	}

	deleteThread(id : string) {
		this.threadStore.dispatch( threadActions.deleteThread({ id }) );
		this.showForm = !this.showForm;
	}

	
}
