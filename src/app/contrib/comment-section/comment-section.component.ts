import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from 'src/app/common/services/comment.service';

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
    @Input() contentId = null;

    constructor(private commentService: CommentService) {
    }

    ngOnInit(): void {
        /* All we had to do to get obs as an array was put these lines in ngOnInit
            psst- input properties havent been read when object is constructed i guess.
        */
        this.commentService.getContentComments$(this.contentId).subscribe(response => {
            this.comments = response;
        });
    
    }

    create(content : HTMLInputElement) {
        if (this.contentId === null) {
            alert('cannot comment without a comment subject!');
            return 0;
        }
        let comment = new UserComment(this.contentId, this.username, content.value)
        this.commentService.create(comment);

        /* reset the prompt so its blank for next comment*/
        content.value = '';
    }

    update(comment) {
        let edited = prompt('enter text for your new comment:');
        comment.text = edited;
        this.commentService.update(comment);
    }

    delete(commentId : string) {
        this.commentService.delete(commentId);

    }





}
