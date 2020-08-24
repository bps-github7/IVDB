import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/common/services/category.service';
import { GenerateGameService } from 'src/app/common/services/generate-game.service';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-games-form',
  templateUrl: './games-form.component.html',
  styleUrls: ['./games-form.component.css']
})
export class AdminGamesFormComponent implements OnInit {
    categories$;
    creators$;
    consoleMakers$;
    game = {};
    game$;

    constructor(private ggService : GenerateGameService, private router: Router, private route: ActivatedRoute) { 
        this.categories$ = ggService.getCategories();
        this.creators$ = ggService.getCreators();
        this.consoleMakers$ = ggService.getConsoleMakers();

        //Dont think this is working... 
        // let id = this.route.snapshot.paramMap.get('id');
        // if (id) this.ggService.get(id).pipe(take(1)).subscribe(g => this.game = g);
    
        let id = this.route.snapshot.paramMap.get('id')
        if (id)
        this.game$= this.ggService.getGame(id).subscribe(g=>this.game$=g);
    }

    save(game) {
        this.ggService.create(game);
        this.router.navigate(['/admin/games']);
    }


    //when is the browser ever in the position for this line of code to run and achieve something?
    test() {
        console.log(this.route.snapshot.paramMap.get('id'));
    }

    ngOnInit(): void {
    }

}
