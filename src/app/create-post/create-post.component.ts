import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/common/services/auth.service';
import { ForumPostService } from 'src/app/common/services/forum-post.service';
import { UserService } from 'src/app/common/services/user.service';
import { ForumPost } from 'src/app/models/content/ForumPost';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
    form : FormGroup;
    postId: string;
    post : ForumPost;

    userId;
    username;
    threadTitle: string;

    constructor(
        private route : ActivatedRoute,
        private router : Router,
        private forumPostservice : ForumPostService,
        private authService : AuthService,
        private userService : UserService,
        private fb : FormBuilder) {
        
        //is this the same as what goes in localstorage? ??
        this.authService.user$.subscribe(p => this.userId = p.uid);
        this.userService.get(this.userId).valueChanges()
        .subscribe(p => this.username = p.displayname);

        this.threadTitle = this.route.snapshot.paramMap.get('thread');
        // this.postId = this.route.snapshot.paramMap.get('id');

        // if (this.postId) {            
        //     this.forumPostservice.getPost$(this.postId)
        //     .subscribe(p => this.post = p);

          

        //     this.form = this.fb.group({
        //         text : [this.post.text, Validators.required]
        //         // should be more, but unsure for now.
        //     })
        // } else {
            this.form = this.fb.group({
                text : ['', Validators.required]
                // should be more, but unsure for now.
            })
        // }

    }

    get text() { return this.form.get('text').value; }

    ngOnInit(): void {
    }


    submit() {
        // determine if we need to add or update - ps postID isnt a good metric for that!!!
        // this.forumPostservice.updatePost()
        if (this.postId) {
        // this.forumPostservice.updatePost()
            console.log("we doin a updaterooni son!")
        } else {
            this.forumPostservice.addPost({
                // feel that poster feels a lil more logical than creator, yah?
                thread: this.threadTitle,
                creator : this.username,
                text : this.text
            })
            // this.router.navigate(['../']);
        }
    }
}
