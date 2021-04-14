import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForumPostService } from 'src/app/services/forum-post.service';
import { ForumPost } from 'src/app/models/content/forum-post';

@Component({
  selector: 'view-thread',
  templateUrl: './view-thread.component.html',
  styleUrls: ['./view-thread.component.css']
})
export class ViewThreadComponent implements OnInit {

    threadTitle : string;
    posts : ForumPost [];

    constructor(
        private route : ActivatedRoute,
        private forumPostService : ForumPostService) {
        this.threadTitle = this.route.snapshot.paramMap.get('title').split('-').join(' ')
    
        this.forumPostService.getPosts$(this.threadTitle)
        .subscribe(p => this.posts = p);
    }

  ngOnInit(): void {
  }

}
