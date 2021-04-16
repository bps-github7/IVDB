import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/models/content/content';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news$ : Content [];
  

  constructor(private newsService : NewsService) {
    this.newsService.getAll$().subscribe(response => this.news$ = response);

   }

  ngOnInit(): void {
  }

}
