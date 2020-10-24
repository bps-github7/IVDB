import { Component, Input, OnInit } from '@angular/core';
import { NewsService } from '../common/services/news.service';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
 
    @Input()content;
    news$;

    constructor(private newsService : NewsService) {
        this.newsService.news.subscribe(doc => this.news$ = doc)
    }

    ngOnInit(): void {
    }

}
