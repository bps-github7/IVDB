import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as actions from '../../../actions/content.actions';
import * as fromContent from '../../../reducers/content.reducer';

@Component({
  selector: 'app-crud-hub',
  templateUrl: './crud-hub.component.html',
  styleUrls: ['./crud-hub.component.sass']
})

/* 
	This is really just an example of how to leverage ngrx entity + store. 
	in finished site, admins will create, update or delete content from 'admin/site-dashboard/content'
*/

export class CrudHubComponent implements OnInit {

	contents: Observable<any>;
	title: string = '';
	description: string;
	body: string;

  constructor(private store : Store<fromContent.State>) { }

  ngOnInit(): void {
		this.contents = this.store.select(fromContent.selectAll)
		this.store.dispatch( new actions.Query() );
		console.log(this.contents);
	}


	createContent(title, description, body) {
		this.store.dispatch( new actions.Added({ id: new Date().getUTCMilliseconds().toString(), title, description, body }) )
	}
	
	updateContent(id, title, description, body) {
		this.store.dispatch( new actions.Update(id, { title, description, body }))
	}

	deleteContent(id, title, description, body) {
		this.store.dispatch( new actions.Removed({id, title, description, body}) )
	}
}
