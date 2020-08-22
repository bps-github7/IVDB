import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../common/services/auth.service';
import { AppUser } from '../models/app.user';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {

    appUser : AppUser;
    comments: any;
    private url = 'http://jsonplaceholder.typicode.com/comments';

    constructor(private http : HttpClient, private auth : AuthService) {
        auth.appUser$.subscribe(appUser => this.appUser = appUser);
        http.get(this.url)
        .subscribe(response => {
            this.comments = response;
        });
   }

    createComment(input: HTMLInputElement ) {
        // if comment is blank, dont do anything.
        if (input.value === '') return false;

        // if user not signed in, tell user post will be from 'guest'
        // then this should all be indented with that conditionals' codeblock
        //if (!user.signed_in) alert('Posting as guest. ok?');

        let comment_content = { body: input.value };
        input.value = '';

        //send new comment to server, 
        // then post the response to comments array
        this.http.post(this.url, comment_content)
        .subscribe(response => {
            comment_content['id'] = response;
            this.comments.splice(0,0,comment_content);
        })
        
        
    }

}
