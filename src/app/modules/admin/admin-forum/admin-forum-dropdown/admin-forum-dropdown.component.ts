import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Forum } from 'src/app/models';

import * as fromThread from 'src/app/store/reducers/thread.reducer';
import * as threadActions from 'src/app/store/actions/thread.actions';
import { selectThreadsByForum, selectThreadsByForumAndTitleSubstring } from 'src/app/store/selectors/thread.selector';


@Component({
  selector: 'admin-forum-dropdown',
  templateUrl: './admin-forum-dropdown.component.html',
  styleUrls: ['./admin-forum-dropdown.component.sass']
})
export class AdminForumDropdownComponent implements OnInit {

	@Input() forum : Forum;
	@Input() threads$ : Observable<any>;

	/* Enables the selection and viewing of a forum's child threads, and adminstration of them */
  constructor(
	) { }

  ngOnInit(): void {
	}

}
