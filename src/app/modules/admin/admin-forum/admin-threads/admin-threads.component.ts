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
import { ForumInfo, Thread } from 'src/app/models';
import { selectForumInfoFamily } from 'src/app/store/selectors/forum-info.selector';
import { Observable } from 'rxjs';


@Component({
  selector: 'admin-threads',
  templateUrl: './admin-threads.component.html',
  styleUrls: ['./admin-threads.component.sass']
})
export class AdminThreadsComponent implements OnInit {
	filteredThread$: any;
	familyChoices : Observable<any>;
	prefixChoices : Observable<any>;
	typeChoices : Observable<any>;
	
	
	forumChoices : Observable<any>;

	forums$ : Observable<any>;
	forumData : any;

	threads$: Observable<any>;
	threadData: any;

	showForm : boolean = false;

  constructor(
		private forumStore : Store<fromForum.State>,
		private forumInfoStore : Store<fromForumInfo.State>,
		private threadStore : Store<fromThread.State>) { }

	ngOnInit(): void {
		this.threadStore.dispatch( threadActions.readThreads() );
		this.forumStore.dispatch(  forumActions.readForum() );

		this.filteredThread$ = this.threads$ =  this.threadStore.select(fromThread.selectAll)	

		// read threads and forums from firestore

		this.forums$ = this.forumStore.select( fromForum.selectAll );



		// did this in an effort to avoid hardcoding, turned out being quite a pain
		this.forumInfoStore.dispatch( forumInfoActions.readForumInfo() );

		// this an un ideal / hardcoded implm id like to avoid
		this.familyChoices = this.forumInfoStore.select( selectForumInfoFamily("family") )
		this.prefixChoices = this.forumInfoStore.select( selectForumInfoFamily("prefix") )
		this.typeChoices = this.forumInfoStore.select( selectForumInfoFamily("type") )
		
		
		// console.log(this.forumChoices);

		// this.threadData = {
		// 	"gaming" : this.threadStore.select( selectThreadsByForum("gaming") ),
		// 	"culture" : this.threadStore.select( selectThreadsByForum("culture") ),
		// 	"miscellaneous" : this.threadStore.select( selectThreadsByForum("miscellaneous") ),
		// 	"help and support" : this.threadStore.select( selectThreadsByForum("help and support") ), 
		// }
	}

	getThreadsInForum(forumTitle : string) {
		return this.threadStore.select( selectThreadsByForum(forumTitle) );
	}

	filterThreads(event) {
		// in this case family is forum, but we should look past that for convenience sake
		const { query, family } = event	
		console.log(query, family);
		// if (query) {
		// 	this.threadData[family] = this.threadStore.select(selectThreadsByForumAndTitleSubstring(family, query));
		// } else {
		// 	this.threadData[family] = this.threadStore.select(selectThreadsByForum(family))
		// }
	}

	createThread(thread : Thread) {
		this.threadStore.dispatch( threadActions.createThread({id : v4(), ...thread}) )
	}

	updateThread(thread : Partial<Thread>) {
		this.threadStore.dispatch( threadActions.updateThread({id : thread.id, data : thread}) );
	}

	deleteThread(id : string) {
		this.threadStore.dispatch( threadActions.deleteThread({ id }) );
	}

	
}
