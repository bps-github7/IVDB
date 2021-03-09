import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameInfoService } from '../common/services/gameinfo.service';
import { GameDescriptor } from '../models/content/GameDescriptor';

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
        this.gameInfoService.getType$('category').subscribe(p => this.categories = p);

        // this.categories = this.gameInfoService.get_categories_array();
        
        if (this.category) {
            this.gameInfoService.getDocument$(this.category, 'category')
            .subscribe(p => {
                // pipe(take(1)) didnt work so just subscripting it to get first value for now.                
                this.category = p[0]});
                // this.category = p});
            }
    }

    ngOnInit(): void {
    }

}
