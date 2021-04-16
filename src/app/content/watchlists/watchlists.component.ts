import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { NewsService } from '../../services/news.service';
import { News } from '../../models/content/news';
import { Content } from 'src/app/models/content/content';
import { WatchlistsService } from 'src/app/services/watchlists.service';

@Component({
  selector: 'app-watchlists',
  templateUrl: './watchlists.component.html',
  styleUrls: ['./watchlists.component.css']
})
export class WatchlistsComponent implements OnInit {

  watchlists$ : Content [];


    constructor(private watchlistsService : WatchlistsService) {
      this.watchlistsService.getAll$().subscribe(response => this.watchlists$ = response);
    }

    ngOnInit(): void {

    }

}
