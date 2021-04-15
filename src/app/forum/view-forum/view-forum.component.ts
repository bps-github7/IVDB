import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForumsService } from 'src/app/services/forums.service';
import { ThreadService } from 'src/app/services/thread.service';
import { Forum } from 'src/app/models/content/Forum';
import { Thread } from 'src/app/models/content/Thread';

@Component({
  selector: 'view-forum',
  templateUrl: './view-forum.component.html',
  styleUrls: ['./view-forum.component.css']
})
export class ViewForumComponent implements OnInit {

    forumTitle : string;
    threads : Thread [] = [];

    constructor(
        private threadService : ThreadService,
        private route : ActivatedRoute) {
        this.forumTitle = this.route.snapshot.paramMap.get('forum-title');
        this.forumTitle = this.forumTitle.split('-').join(' ');
        this.threadService.getThreadsByForum$(this.forumTitle)
        .subscribe(p => this.threads = p);
    }

    ngOnInit(): void {
    }

}
