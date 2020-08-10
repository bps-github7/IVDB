import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {


    comments: any;
    private url = 'http://jsonplaceholder.typicode.com/posts';

    constructor(private http : HttpClient) {
        http.get(this.url)
        .subscribe(response => {
            this.comments = response;
        });
   }

    createComment(comment_title: HTMLInputElement ) {
        let comment = { title: comment_title.value };
        comment_title.value = '';

        this.http.post(this.url, JSON.stringify(comment))
            .subscribe(response => {
                comment['id'] = response;
                this.comments.splice(0,0,comment);
                //why wouldnt we just do
                // this.comments.splice(0,0,response)

            })
    }

}
