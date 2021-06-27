import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as actions from '../../../../store/actions/content.actions';
import * as fromContent from '../../../../store/reducers/content.reducer';
import { v4 } from 'uuid';

@Component({
  selector: 'app-crud-hub',
  templateUrl: './crud-hub.component.html',
  styleUrls: ['./crud-hub.component.sass']
})

export class CrudHubComponent implements OnInit {

	contents: Observable<any>;
	title: string = '';
	description: string;
	body: string;

  constructor(private store : Store<fromContent.State>) { }

  ngOnInit(): void {
		this.contents = this.store.select(fromContent.selectAll)
		this.store.dispatch( actions.readContent() );
	}


	createContent(title, description, body) {
		// LESSONS from updating actions and reducer to the new version- 
		// 1. all data to action arguments has to be an object! note same in update, delete and create.
		
		this.store.dispatch( actions.createContent({ id: v4(), title, description, body }) )

	}

	updateContent(id, title, description, body) {
		this.store.dispatch( actions.updateContent({id : id, data: {title, description, body}}))
	}

	deleteContent(id) {
	// failure to make id an object: {t,h,i,s, ,i,s, ,e,x,a,m,p,l,e, ,s,t,r,i,n,g} instead of {this is example string} 
		this.store.dispatch( actions.deleteContent({id}) )
	}
}
