import { ForumInfo } from './../../../../models/content/forum-info.model';
import { v4 } from 'uuid';
import { Component, OnInit } from '@angular/core';

import * as fromForumInfo from 'src/app/store/reducers/forum-info.reducer';
import * as forumInfoActions from 'src/app/store/actions/forum-info.actions';
import { Store } from '@ngrx/store';
import { getFamily } from 'src/app/store/selectors/forum-info.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'admin-forum-info',
  templateUrl: './admin-forum-info.component.html',
  styleUrls: ['./admin-forum-info.component.sass']
})
export class AdminForumInfoComponent implements OnInit {
	showMetaData : boolean = false;
	buttonText : string;
	forumInfoData : any={}
	familyChoices: string [];
	makerChoices : Observable<any>;

	constructor(private forumInfoStore : Store<fromForumInfo.State>) { }

	ngOnInit() {
		this.buttonText = this.showMetaData ? "hide Info" : "Show info about Forum Info"
		
		this.forumInfoStore.dispatch( forumInfoActions.readForumInfo() );
		
		this.forumInfoData = {
			"families" : this.forumInfoStore.select(getFamily("family")),
			"prefixes" : this.forumInfoStore.select(getFamily("prefix")),
			"types" : this.forumInfoStore.select(getFamily("type"))
		}
		this.familyChoices = Object.keys(this.forumInfoData);  		
	}

	createForumInfo(content : ForumInfo) {
		this.forumInfoStore.dispatch( forumInfoActions.createForumInfo({id: v4(), ...content}) )
	}

	updateForumInfo(content : Partial<ForumInfo> | ForumInfo ) {
		this.forumInfoStore.dispatch( forumInfoActions.updateForumInfo({id : content.id, data : content}) )
	}

	deleteForumInfo(id : string) {
		this.forumInfoStore.dispatch( forumInfoActions.deleteForumInfo({ id }) )
	}
}
