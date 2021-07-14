import { Component, OnInit } from '@angular/core';
import { Forum } from 'src/app/models/content/forum.model';
import { ForumInfo } from 'src/app/models/content/forum-info.model';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import v4 from 'uuid';
import { MatDialog } from '@angular/material/dialog';
import { selectByTitleSubstring } from 'src/app/store/selectors/forum.selector';
import * as forumActions from 'src/app/store/actions/forum.actions'
import * as forumInfoActions from 'src/app/store/actions/forum-info.actions';
import * as fromForum from 'src/app/store/reducers/forum.reducer';
import * as fromForumInfo from 'src/app/store/reducers/forum-info.reducer';
import { getFamily } from 'src/app/store/selectors/forum-info.selector';

@Component({
  selector: 'admin-forum',
  templateUrl: './admin-forum.component.html',
  styleUrls: ['./admin-forum.component.sass']
})
export class AdminForumComponent implements OnInit {
	/* this component will be much like admin-game, except
		you will use it to administer forums instead of games.
	*/	
	chosen : string = "forums";
	forums: Forum [];

	forums$ : Observable<any>;
	forumInfo : any [];
	forumInfoHelp : any [];

	filteredForums$: Observable<any>;

	showHelp : boolean = false;

	constructor(
		private forumStore : Store<fromForum.State>,
		private forumInfoStore : Store<fromForumInfo.State>, 
		// private dialog : MatDialog
		) {
	}

	ngOnInit(): void {
		this.filteredForums$ = this.forums$ =  this.forumStore.select(fromForum.selectAll)
		this.forumStore.dispatch( forumActions.readForum() );

		this.forumInfoStore.dispatch( forumInfoActions.readForumInfo() );		
		this.forumInfo = [
			{
				title : "families",
				singular : "family",
				content : this.forumInfoStore.select(getFamily("family"))
			},
			{
				title : "prefixes",
				singular : "prefix",
				content : this.forumInfoStore.select(getFamily("prefix"))
			},
			{
				title : "types",
				singular : "type",
				content : this.forumInfoStore.select(getFamily("type"))
			}
		]
		this.forumInfoHelp = [
			{
				title : "family",
				description : "families are the broad family where a paticular forum lives. These are the qualifiers which multiple forums poses and live within. An example is 'help and support', which contains forums like 'bug reporting', 'change-log', 'request features' and the like. Each of these forums contains threads about their paticular forum topic, but those forums all fall under the broad category 'help and support'"
			},
			{
				title : "prefix",
				description : "A prefix is a short descriptor which characterize or designate a thread. Prefixes are attached to a thread title, to further qualify the title. Prefixes may be used both internally and externally (through outside search engines) to locate a particular thread within the forum. They may be used by admins and moderators for two reasons: either to label a thread as negative and pending review, so that posters may have the chance to edit and avoid thread closing or having their account banned. Prefixes are also used to direct discussion- by labeling a thread, users are given a better idea of what type of reply may be considered appropriate or inappropriate, relevant, etc."
			},
			{
				title : "type",
				description : "A type determines the starting template for a thread, in order to designate it for a certain purpose. The default thread type is discussion, but selecting an alternative such as question and answer will change the way the thread is created and how users will interact with that it in their replies to the intial post. In the example of question and answer, replies are meant to answer a question posed in the initial post, and answers recieve votes which determine their order of appearance."
			}
	
	]
	}

	filter(query: string) {
		this.filteredForums$ = (query) ?
				// should be a selector which gets a title that matches a substring
				this.forumStore.pipe(select(selectByTitleSubstring(query))) :
				this.forums$;
	}


	createForumInfo(forumInfo : ForumInfo) {
		this.forumInfoStore.dispatch( forumInfoActions.createForumInfo( {id : v4(), ...forumInfo} ) )
	}

	updateForumInfo(forumInfo : {id : string, data : Partial<ForumInfo>}) {
		this.forumInfoStore.dispatch( forumInfoActions.updateForumInfo({id : forumInfo.id, data : forumInfo.data}))
	}

	deleteForumInfo(id : string) {
		this.forumInfoStore.dispatch( forumInfoActions.deleteForumInfo({id}) )
	}
}
