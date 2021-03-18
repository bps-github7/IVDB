import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ThreadService } from '../../../common/services/thread.service';
import { Thread } from '../../../models/content/Thread';
/* 
class UserThread implements Thread {
    moderators;
    isActive: boolean = true;
    family;
    creator;
    title;
    description;
    topics;
    invitees;
    posts;
    uid;


    constructor() {
        this.title = '';
        this.description = '';
        this.family = 'games';
    } 
} */


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
    // thread = new UserThread();
    // thread : {title, description, creator, uid};
    thread : any;
    username: string;

    constructor(
        private threadService : ThreadService,
        private router : Router,
        private route : ActivatedRoute,
        private fb: FormBuilder) {

            // username stored in localstorage is used as author- formcontrol should not be editable (at least for regular users)
            this.username = localStorage.getItem("username"); 
            
            this.form = fb.group({
                    moderators : fb.array([]),
                    isActive : [true, Validators.required],
                    creator : ['', Validators.required],
                    title : ['', Validators.required],
                    description : [''],
                    family : ['', Validators.required],
                    topics : fb.array([]),
                    invitees : fb.array([])
                })
            
            //get the post id if present in route
            this.thread_id = this.route.snapshot.paramMap.get('id');
            if (this.thread_id) {
                this.threadService.get$(this.thread_id).subscribe(g => this.thread = {
                    title  : g.title,
                    description : g.description,
                    creator : g.creator,
                    uid : g.uid
                });   
                console.log(this.thread.title);
                
                // this.form.patchValue({creator : this.username, title : this.thread.title, description : this.thread.description});
            }
            // else {
            //     this.form = fb.group({
            //         //prototype: set the moderator as the posting user- dont let this go to production unchanged!
            //         moderators : [this.username, Validators.required],
            //         isActive : [true, Validators.required],
            //         creator : [this.username, Validators.required],
            //         title : ['', Validators.required],
            //         description : [''],
            //         // family : [this.thread.family, Validators.required],
                    // topics : fb.array(this.thread.topics),
                    // invitees : fb.array(this.thread.invitees)
                // })  
            // }    
          }

            
    get creator() { return this.form.get('creator').value; }
    get title() { return this.form.get('title').value; }
    get description() { return this.form.get('description').value; }
    // get family() { return this.form.get('family').value; }
    // get topics() { return this.form.get('topics') as FormArray; }
    // get invitees() { return this.form.get('invitees') as FormArray; }

    ngOnInit(): void {
    }

    submit() {
        // console.log("submitting the form!")
        if (this.thread){
            this.threadService.save({
                // dont forget all the other values!
                creator : this.username,
                title : this.title,
                description : this.description}, this.thread.uid)}
        else {
            this.threadService.add({
                creator : this.username,
                title : this.title,
                description : this.description})
        }
    }

}
