import { selectForumInfoByFamilyAndTitleSubstring } from './../../../../store/selectors/forum-info.selector';
import { ForumInfo } from './../../../../models/content/forum-info.model';
import { v4 } from 'uuid';
import { Component, OnInit } from '@angular/core';

import * as fromForumInfo from 'src/app/store/reducers/forum-info.reducer';
import * as forumInfoActions from 'src/app/store/actions/forum-info.actions';
import { Store } from '@ngrx/store';
import { selectForumInfoFamily } from 'src/app/store/selectors/forum-info.selector';
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
			"families" : this.forumInfoStore.select(selectForumInfoFamily("family")),
			"prefixes" : this.forumInfoStore.select(selectForumInfoFamily("prefix")),
			"types" : this.forumInfoStore.select(selectForumInfoFamily("type"))
		}
		this.familyChoices = Object.keys(this.forumInfoData);  		
	}


	filterForumInfo(event : any) {
		const {family, singularFamilyName, query}  = event 
		if (query) {
			this.forumInfoData[family] = this.forumInfoStore.select(selectForumInfoByFamilyAndTitleSubstring(singularFamilyName, query))
		} else {
			this.forumInfoData[family] = this.forumInfoStore.select(selectForumInfoFamily(singularFamilyName));
		}
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
