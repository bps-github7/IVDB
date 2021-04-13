import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { GameInfoService } from '../../../services/gameinfo.service';

@Component({
  selector: 'console-post',
  templateUrl: './console-post.component.html',
  styleUrls: ['./console-post.component.css']
})
export class ConsolePostComponent implements OnInit {


    @Input() title : string;
    @Input() posts : any = [];

    @Output() editEvent = new EventEmitter<string>();
    @Output() deleteEvent = new EventEmitter<string>();

    selected: any;
    editingConsole: boolean = false;

    constructor(private gameInfoService : GameInfoService) { }

    ngOnInit(): void {
    }

    edit(uid : string) {
        this.editingConsole = false;
        this.editEvent.emit(uid);
    }

    /*  TODO: two errors here/ in console-form 
    1. edit => reset causes overwrite of whatever you were trying to previously edit
    2. wrong image is shown in console-card if you view two consoles in edit consequetively.
     */
    triggerEditEvent(uid){
        this.gameInfoService.getConsole$(uid).subscribe(p => this.selected = 
            this.selected = { 
                uid : uid,
                nickname : p.nickname,
                name : p.name,  
                maker : p.maker,
                generation : p.generation,
                type : p.type,
                released : p.released,
                image : p.image,
                description : p.description
            });
        this.editingConsole = true;
    }



    delete(uid : string) {
        if (confirm("are you sure you want to delete this console? (cannot be undone)"))
            this.deleteEvent.emit(uid);
    }

}
