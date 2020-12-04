import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameInfoService } from '../common/services/gameinfo.service';
import { Game_Descriptor } from '../models/content/Game_Descriptor';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

    // A single category being examined by user at runtime.
    // note that it will be null if no route parameter `:category` was given.
    category: any;
    //the array of all categories
    categories: any = [];
    gameInfo : any;

  constructor(private router : Router,
    private route : ActivatedRoute,
    private gameInfoService : GameInfoService) {
        this.route.paramMap.subscribe(params => {
            this.category = params.get('category');
        })
        this.gameInfoService.gameInfo$.subscribe(g => this.gameInfo = g);
        this.categories = this.gameInfoService.get_categories_array();
        if (this.category) {
            this.category = this.gameInfoService.find_category(this.category);
        }
    }

    ngOnInit(): void {
    }

}
