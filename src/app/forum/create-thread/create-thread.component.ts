import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ThreadService } from 'src/app/services/thread.service';
import { UserService } from 'src/app/services/user.service';
import { Thread } from 'src/app/models/content/Thread';

@Component({
  selector: 'app-create-thread',
  templateUrl: './create-thread.component.html',
  styleUrls: ['./create-thread.component.css']
})
export class CreateThreadComponent implements OnInit {

    form: FormGroup;
    threadId : string;
    thread: Thread;

    
    userId;
    username;

    constructor(
        private route : ActivatedRoute,
        private threadService : ThreadService,
        private userService : UserService,
        private fb : FormBuilder
    ) { 

        //should really just use the auth service
        this.userId = localStorage.getItem('user_id');
        this.username = localStorage.getItem('username')
        this.threadId = this.route.snapshot.paramMap.get('id');
        if (this.threadId) {
            this.threadService.getThread$(this.threadId)
            .subscribe(p => this.thread = p);

            this.form = this.fb.group({
                // creator : [''],
                title : [this.thread.title, Validators.required],
                text : [this.thread.description, Validators.required]
                // should be more, but unsure for now.
            })
        } else {
            
            this.form = this.fb.group({
                creator : [this.username],
                title : ['', Validators.required],
                text : ['', Validators.required]
                // should be more, but unsure for now.
            })
        }
        

    }

    ngOnInit(): void {
    }

    submit() {
        console.log("submitting de form de forum");
    }

}
