import { Component, OnInit } from '@angular/core';
import { GameInfoService } from '../../../common/services/gameinfo.service';

@Component({
  selector: 'console-info-form',
  templateUrl: './console-info-form.component.html',
  styleUrls: ['./console-info-form.component.css']
})
export class ConsoleInfoFormComponent {

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

    // editConsole(uid, newConsole) {
        // 
    editConsole(newConsole) {
        this.gameInfoService.editConsole(newConsole.uid, newConsole);
        console.log("edit!");
    }

    deleteConsole(uid) {
    // deleteConsole() {
        console.log("delete!")
        this.gameInfoService.deleteConsole(uid);

        //horribly inefficient!
        this.getAll();
    }


}
