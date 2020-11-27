import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameInfoService } from '../common/services/gameinfo.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

    category: any;
    categoryInfo : any;

  constructor(private router : Router,
    private route : ActivatedRoute,
    private gameInfoService : GameInfoService) {
        this.category = this.route.snapshot.paramMap.get('category');
        if (this.category)
            console.log("got this category rah hurre " + this.category)
        //should really consider getting the specific thing you need from gameinfo service rather than the whole badumpadump as ovservable.
        // this.gameInfoService.get$(this.category).subscribe(g => this.game = g);
    }

  ngOnInit(): void {
  }

}
