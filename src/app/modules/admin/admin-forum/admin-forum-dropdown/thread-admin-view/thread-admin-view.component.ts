import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Thread } from 'src/app/models';
import { ThreadSelectedService } from 'src/app/services/behaivor-subjects/thread-selected.service';


@Component({
  selector: 'thread-admin-view',
  templateUrl: './thread-admin-view.component.html',
  styleUrls: ['./thread-admin-view.component.sass']
})
export class ThreadAdminViewComponent implements OnInit {


	@Input() thread: Thread;
	
	@Output() updateEvent$ = new EventEmitter<Thread>();

	constructor(
		private router : Router,
		private threadSelectedService : ThreadSelectedService
		) { }

  ngOnInit(): void {
  }

	editThreadDetails() {
		this.threadSelectedService.select(this.thread);
		this.updateEvent$.emit();		
	}

	manageModeratorsDialog() {
		alert("this should create a dialog as well!")
	}

	viewThreadAsContributor() {
		// issues here and everywhere- converts the space replace character with hexidecimal, so the back conversion doesnt work.
		this.router.navigate(['../../forum/',this.thread.forum.replace(' ','%'),'/thread',this.thread.title.replace(' ','%')])
	}

	viewThreadAsAdmin() {
		this.router.navigate(['../../forum/',this.thread.forum.replace(' ','%'),'/thread',this.thread.title.replace(' ','%'),"?mode='admin/edit'"]);
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
