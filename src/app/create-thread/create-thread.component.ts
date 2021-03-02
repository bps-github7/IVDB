import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ThreadService } from '../common/services/thread.service';
import { Thread } from '../models/content/Thread';

class UserThread implements Thread {
    creator;
    title;
    description;
    topics;
    invitees;

    
    constructor() {
        this.creator = localStorage.getItem("username");
        this.title = '';
        this.description = '';
        this.topics = '';
        this.invitees = '';
    }
}


@Component({
  selector: 'app-create-thread',
  templateUrl: './create-thread.component.html',
  styleUrls: ['./create-thread.component.css']
})
export class CreateThreadComponent implements OnInit {

    username = localStorage.getItem("username");
    thread = new UserThread();
    // thread;
    id;

    // reactive form stuff
    form;

    constructor(private threadService : ThreadService,
        private router : Router,
        private route : ActivatedRoute,
        private fb: FormBuilder) {
    
            this.id = this.route.snapshot.paramMap.get('id');
    
    if (this.id)
        //testing- removed the unnesc first assignment?
        this.threadService.get$(this.id).subscribe(g => this.thread = g);

    //seems that we dont have access to the observable at time of this
    console.log('a thread object field:'+this.thread.title );

    this.form = this.fb.group({
            creator: [this.thread.creator,Validators.required],
            title: [this.thread.title,Validators.required],
            description : [this.thread.description, Validators.required],
            topics: [this.thread.topics],
            invitees : [this.thread.invitees]
        })

        
    }

    // getters for reactive form impl.
    get creator() { return this.form.get('creator'); }

    get title() { return this.form.get('title'); }

    get description() { return this.form.get('description'); }

    get topics() { return this.form.get('topics') }

    get invitees() { return this.form.get('invitees'); }

  ngOnInit(): void {
      }

    save(thread, uid=null) {
        if (uid) {
            this.threadService.save(thread, uid);
        } else {
            console.log("this executed")
            //could have this method return the uid and then cache it somehow
            this.threadService.add(thread);
        }
        
        this.router.navigate(['/forum/view-threads']);
    }

    delete(id) {
        if (confirm("Are you sure you want to delete this thread? (cannot be undone)")){
            this.threadService.delete(id);
            this.router.navigate(['/forum/view-threads']);}
        else return 0;
    }  



}
