import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameInfoService } from '../common/services/gameinfo.service';

@Component({
  selector: 'console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {
  console_maker: any;
    console_name: any;
    console: any;

  constructor(
      private route : ActivatedRoute,
      private gameInfoService : GameInfoService) {
          this.route.paramMap.subscribe(params => {
              this.console_maker = params.get('name');
              this.console_name = params.get('qualified_name'); 
          })
        this.console_maker = this.gameInfoService.find_console_maker(this.console_maker);
        this.console_name = this.console_name.toLowerCase();
        this.console_maker.title = this.console_maker.title.toLowerCase();
        if (this.console_maker.title === 'sony') {
            this.console = this.gameInfoService.find_sony(this.console_name);
        }
        else if (this.console_maker.title === 'nintendo') {
            this.console = this.gameInfoService.find_nintendo(this.console_name);
            console.log("got this here: " + this.console);
        }
        else if (this.console_maker.title === 'microsoft') {
            this.console = this.gameInfoService.find_microsoft(this.console_name);
        }
        else if (this.console_maker.title === 'pc') {
            this.console = this.gameInfoService.find_pc(this.console_name);
        }
       }

  ngOnInit(): void {
  }

}
