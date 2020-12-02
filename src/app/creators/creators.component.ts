import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameInfoService } from '../common/services/gameinfo.service';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.css']
})
export class CreatorsComponent implements OnInit {

    //the specific creator being looked at. Will be null if :creator route parameter is not provided.
    creator : any;
    //the list of all creators
    creators: any = [];
    gameInfo : any;

    constructor(private router : Router,
        private route : ActivatedRoute,
        public gameInfoService : GameInfoService) {
            this.creator = this.route.snapshot.paramMap.get('creator');
            this.creators = this.gameInfoService.get_creators_array();
            if (this.creator) {
                this.creator = this.gameInfoService.find_creator(this.creator);
            }
        }

    
        
    ngOnInit(): void {
    }

}
