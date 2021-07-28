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


	forumData : any = {};
	threadData : any={}

	families$ : Observable<any>;
	forumFamilies : any;
	forumFamilyChoices : any={};

	chosenFamily : string;
	chosenForum: any;
	threadsSelected$ : Observable<any>;
	selectedThread: Thread;
	selectedForum: Forum;


  constructor(
		private forumStore : Store<fromForum.State>,
		private forumInfoStore : Store<fromForumInfo.State>,
		private threadStore : Store<fromThread.State>) { }

	ngOnInit(): void {
		this.threadStore.dispatch( threadActions.readThreads() );
		this.forumStore.dispatch(  forumActions.readForum() );
		this.forumInfoStore.dispatch( forumInfoActions.readForumInfo() );

		this.families$ = this.forumInfoStore.select( selectForumInfoFamily("family") )
		this.families$.subscribe(response => this.forumFamilies = response);


		this.forumFamilies.map((item) => this.forumData[item.title] = this.forumStore.select( selectForumFamily(item.title) ));
		this.forumFamilyChoices = Object.keys(this.forumData);

		
	}

	forumSelected(forum : Forum) {
		this.selectedForum = forum;
		// console.log("got this for forum title :", forum.title);
		this.threadsSelected$	= this.threadStore.select( selectThreadsByForum(forum.title) )
	}

	threadSelected(thread : Thread) {
		this.selectedThread = thread;
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
