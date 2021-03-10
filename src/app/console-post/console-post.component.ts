import { Component, OnInit } from '@angular/core';
import { GameInfoService } from '../common/services/gameinfo.service';

@Component({
  selector: 'console-post',
  templateUrl: './console-post.component.html',
  styleUrls: ['./console-post.component.css']
})
export class ConsolePostComponent implements OnInit {

    nintendo : any = [];
    sony : any = [];
    microsoft : any = [];
    mobile : any = [];
    pc : any = [];
    web : any = [];

    constructor(private gameInfoService : GameInfoService) {
        this.getAll()
    }

    getAll() {
        this.gameInfoService.getConsoleMaker$('nintendo').subscribe(p => this.nintendo = p);
        this.gameInfoService.getConsoleMaker$('sony').subscribe(p => this.sony = p);
        this.gameInfoService.getConsoleMaker$('microsoft').subscribe(p => this.microsoft = p);
        this.gameInfoService.getConsoleMaker$('mobile').subscribe(p => this.mobile = p);
        this.gameInfoService.getConsoleMaker$('pc').subscribe(p => this.pc = p);
        this.gameInfoService.getConsoleMaker$('web').subscribe(p => this.web = p);
    }

  ngOnInit(): void {
  }

}
