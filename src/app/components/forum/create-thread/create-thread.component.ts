import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ThreadService } from 'src/app/common/services/thread.service';
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

    constructor(
        private route : ActivatedRoute,
        private threadService : ThreadService,
        private fb : FormBuilder
    ) { 

        this.threadId = this.route.snapshot.paramMap.get('id');
        if (this.threadId) {
            this.threadService.getThread$(this.threadId)
            .subscribe(p => this.thread = p);

            this.form = this.fb.group({
                text : [this.thread.description, Validators.required]
                // should be more, but unsure for now.
            })
        }
        

    }

    ngOnInit(): void {
    }

}
