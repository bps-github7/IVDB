import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameInfoService } from '../common/services/gameinfo.service';
import { TestingService } from '../common/services/testing.service';

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
        
        //testing only!
        private testingService : TestingService,

        public gameInfoService : GameInfoService) {
            this.route.paramMap.subscribe(params => {
                this.creator = params.get('creator');
            })
            // this.creators = this.gameInfoService.get_creators_array();
            this.testingService.get_type('creator').subscribe(p => this.creators = p);

            if (this.creator) {
                this.creator = this.gameInfoService.find_creator(this.creator);
            }
        }

    
        
    ngOnInit(): void {
    }

}
