import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

    posts: any;

    constructor(private http : HttpClient) {
        http.get('http://jsonplaceholder.typicode.com/posts')
        .subscribe(response => {
            this.posts = response;
        });
   }

}
