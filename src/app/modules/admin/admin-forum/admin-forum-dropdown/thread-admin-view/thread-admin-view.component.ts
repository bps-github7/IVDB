import { Component, Input, OnInit } from '@angular/core';
import { Thread } from 'src/app/models';

@Component({
  selector: 'thread-admin-view',
  templateUrl: './thread-admin-view.component.html',
  styleUrls: ['./thread-admin-view.component.sass']
})
export class ThreadAdminViewComponent implements OnInit {


	@Input() thread: Thread;

	constructor() { }

  ngOnInit(): void {
  }

	editThreadDialog() {
		alert("edit thread with dialog here!")
	}

	manageModeratorsDialog() {
		alert("this should create a dialog as well!")
	}

	viewThreadAsContributor() {
		console.log("go to this route")
		console.log("['../../forum/',thread.forum.replaceAll(' ','+'),'/thread',thread.title.replaceAll(' ','+')]")
	}

	viewThreadAsAdmin() {
		console.log("go to this route:")
		console.log("['../../forum/',thread.forum.replaceAll(' ','+'),'/thread',thread.title.replaceAll(' ','+')]?mode='admin/edit']");
	}

	closeThread() {
		if(confirm("are you sure you want to close this thread (consider what warnings to include here...)"))
			console.log("emit a closeThread event");
	}

	deleteThread() {
		if(confirm("are you sure you want to delete this thread\nWARNING: Cannot be undone"))
			console.log("emit delete event");
	}

	


}
