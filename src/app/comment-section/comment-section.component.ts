import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../models/content/Comment';
import { CommentService } from '../common/services/comment.service';

// didnt implement our interface for convenince sake.
class UserComment {
    username: string;
    contentId: string;
    text: string;

    constructor(contentId, username, text) {
        this.contentId = contentId;
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
    @Input() contentId : string = null;

    constructor(private commentService: CommentService) {
        this.commentService.getContentComments$(this.contentId).subscribe(response => {
            this.comments = response;
        });
    }

    ngOnInit(): void {
    }

    addNewComment(content : HTMLInputElement) {
        if (this.contentId === null) {
            alert('cannot comment without a comment subject!');
            return 0;
        }
        let comment = new UserComment(this.contentId, this.username, content.value)
        this.commentService.save(comment);

        /* reset the prompt so its blank for next comment*/
        content.value = '';
    }

    edit(commentId : string) {
    
    }

    delete(commentId : string) {

    }





}
