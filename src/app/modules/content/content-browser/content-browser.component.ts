import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as actions from '../../../actions/content.actions';
import * as fromContent from '../../../reducers/content.reducer';

@Component({
  selector: 'app-content-browser',
  templateUrl: './content-browser.component.html',
  styleUrls: ['./content-browser.component.sass']
})
export class ContentBrowserComponent implements OnInit {

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

}
