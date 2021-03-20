import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ForumPostService } from 'src/app/common/services/forum-post.service';
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

    constructor(
        private route : ActivatedRoute,
        private forumPostservice : ForumPostService,
        private fb : FormBuilder) {
        this.postId = this.route.snapshot.paramMap.get('id');

        if (this.postId) {            
            this.forumPostservice.getPost$(this.postId)
            .subscribe(p => this.post = p);

            this.form = this.fb.group({
                text : [this.post.text, Validators.required]
                // should be more, but unsure for now.
            })

        }

    }

    ngOnInit(): void {
    }


    submit() {
        // determine if we need to add or update - ps postID isnt a good metric for that!!!
        // this.forumPostservice.updatePost()
    }
}
