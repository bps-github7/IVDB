import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ThreadService } from '../../../common/services/thread.service';
import { Thread } from '../../../models/content/Thread';

@Component({
  selector: 'app-create-thread',
  templateUrl: './create-thread.component.html',
  styleUrls: ['./create-thread.component.css']
})
export class CreateThreadComponent implements OnInit {

    topic_options = ["about", "hint", "discussion", "argument", "conjecture"];
    family_options = ["general", "walkthrough", "cheats", "debate", "upcomming"];

    form: FormGroup;
    thread_id: string;
    thread: any;
    username: string;

    constructor(
        private threadService : ThreadService,
        private router : Router,
        private route : ActivatedRoute,
        private fb: FormBuilder) {

            //get the post id if present in route
            this.thread_id = this.route.snapshot.paramMap.get('id');
            if (this.thread_id)
                this.threadService.get$(this.thread_id).subscribe(g => this.thread = g);
            
            // username stored in localstorage is used as author- formcontrol should not be editable (at least for regular users)
            this.username = localStorage.getItem("username"); 



            // Initialize the form
            this.form = fb.group({
                creator : [this.username, Validators.required],
                title : ['', Validators.required],
                description : [''],
                family : ['', Validators.required],
                topics : [''],
            })

                
          }

          get creator() { return this.form.get('creator').value; }

          get title() { return this.form.get('title').value; }

          get description() { return this.form.get('description').value; }

          get family() { return this.form.get('family').value; }

          get topics() { return this.form.get('topics').value; }



    ngOnInit(): void {
    }

    submit() {
        console.log("submitting the form!")
        // if (this.thread)
        //     this.threadService.save({creator})
    }

}
