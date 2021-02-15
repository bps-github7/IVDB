import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../models/content/Comment';
import { CommentService } from '../common/services/comment.service';

// didnt implement our interface for convenince sake.
class UserComment {
    username: string;
    contentId: string;
    text: string;

    constructor(username, text) {
        this.username = username;
        this.text = text;
    }
}

@Component({
  selector: 'comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit {

    form: any;
    comments:  any=[];

    // If username is null, set commenter username to 'guest'
    @Input() username : string = 'guest';
    @Input() contentId : string;

    constructor(private commentService: CommentService) {
        // this.commentService.getAll$(this.contentId).subscribe(p => this.comments = p)
    }

    ngOnInit(): void {
    }

    add_new_comment(content) {
        this.comments.push(new UserComment(this.username, content.new_comment));
        // See Programming with Mosh for explanation of how to do this.
    }

    edit(commentId : string) {
    
    }

    delete(commentId : string) {

    }





}
