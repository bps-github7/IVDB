import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Forum } from 'src/app/models';

@Component({
  selector: 'forum-selection',
  templateUrl: './forum-selection.component.html',
  styleUrls: ['./forum-selection.component.sass']
})
export class ForumSelectionComponent implements OnInit {

	@Input() forums$ : Observable<any>;

	@Output() selectedEvent$ = new EventEmitter<Forum>();

	constructor() { }

  ngOnInit(): void {
  }

	forumSelected(event : any, forum: Forum) {
		if (event.target.checked) {
			this.selectedEvent$.emit(forum);
		}
	}




}
