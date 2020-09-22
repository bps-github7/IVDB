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
    console : any;

  constructor(
    private router : Router,
    private route : ActivatedRoute,
    private gameInfoService : GameInfoService) {

        this.name = this.route.snapshot.paramMap.get('name');
        
        if (this.name)
            // this.console = this.gameInfoService.get_console(this.name);
            // console.log(this.console);
            //alternatively, you could do...
            this.console = this.gameInfoService.info.name
            console.log(this.console);
            //neither approach works. this.console is undefined.
        }


  ngOnInit(): void {
  }

}
