import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameInfoService } from '../common/services/gameinfo.service';

@Component({
  selector: 'app-view-console',
  templateUrl: './view-console.component.html',
  styleUrls: ['./view-console.component.css']
})
export class ViewConsoleComponent implements OnInit {

    name : any;
    console_maker : any;
    consoleList;
    console : any;

  constructor(
    private router : Router,
    private route : ActivatedRoute,
    private gameInfoService : GameInfoService) {

        this.console_maker = this.route.snapshot.paramMap.get('company');
        this.name = this.route.snapshot.paramMap.get('name');

        console.log('comapny : ' + this.console_maker);
        console.log('console : '+ this.name);
        
        if (this.name)
            console = this.gameInfoService.get_console(this.console_maker, this.name);
            console.log(console);
        }


  ngOnInit(): void {
  }

}
