import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameInfoService } from '../common/services/gameinfo.service';

@Component({
  selector: 'app-consoles',
  templateUrl: './consoles.component.html',
  styleUrls: ['./consoles.component.css']
})
export class ConsolesComponent implements OnInit {

    name : any;
    console_maker : any;
    consoleList;
    console: any;

  constructor(
    private router : Router,
    private route : ActivatedRoute,
    private gameInfoService : GameInfoService) {

        this.console_maker = this.route.snapshot.paramMap.get('name');
        this.name = this.route.snapshot.paramMap.get('qualified_name');

        console.log('comapny : ' + this.console_maker);
        console.log('console : '+ this.name);
        /* 
        if (this.name)
            console = this.gameInfoService.get_console(this.console_maker, this.name);
            console.log(console);*/
        } 


  ngOnInit(): void {
  }

}
