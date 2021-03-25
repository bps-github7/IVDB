import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { NewsService } from '../../../common/services/news.service';
import { News } from '../../../models/content/news';

@Component({
  selector: 'app-watchlists',
  templateUrl: './watchlists.component.html',
  styleUrls: ['./watchlists.component.css']
})
export class WatchlistsComponent implements OnInit {

    news$ : any;

    constructor(private newsService : NewsService) {
        this.newsService.news$.subscribe(doc => this.news$ = doc)
    }

    ngOnInit(): void {

    }

}
