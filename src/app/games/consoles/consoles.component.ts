import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameInfoService } from 'src/app/services/gameinfo.service';

@Component({
  selector: 'consoles',
  templateUrl: './consoles.component.html',
  styleUrls: ['./consoles.component.css']
})
export class ConsolesComponent implements OnInit {
  console_maker: any;
    console_name: any;
    console: any;
    platform: any;
    similar_titles: { uid: string; }[];


    // constructor() {}
  constructor(
      private route : ActivatedRoute,
      private gameInfoService : GameInfoService) {
          this.route.paramMap.subscribe(params => {
              this.platform = params.get('platform_name');
              this.console_name = params.get('console_name'); 
          })

          // could get a list of other consoles by platform like
          this.gameInfoService.getConsoleMaker$(this.platform)
            .subscribe(p => this.similar_titles = p);

        //   get the console by name
        this.gameInfoService.getConsoleWithName$(this.console_name)
            .subscribe(p=> this.console = p[0]);



       }

  ngOnInit(): void {
  }

}
