import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameInfoService } from '../common/services/gameinfo.service';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.css']
})
export class CreatorsComponent implements OnInit {

    creator : any;
    gameInfo : any;

    constructor(private router : Router,
        private route : ActivatedRoute,
        private gameInfoService : GameInfoService) {
            this.creator = this.route.snapshot.paramMap.get('creator');
            if (this.creator)
                console.log("got this creator rah hurre " + this.creator)
            //should really consider getting the specific thing you need from gameinfo service rather than the whole badumpadump as ovservable.
            this.gameInfoService.gameInfo$.subscribe(g => this.gameInfo = g);
        }  
        
    ngOnInit(): void {
    }

}
