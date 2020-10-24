import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
 
    @Input() content;
    news$;

    constructor() {
    }

    ngOnInit(): void {
    }

}
