import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { GameInfoService } from '../common/services/gameinfo.service';

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


    constructor(private gameInfoService : GameInfoService) { }

    ngOnInit(): void {
    }

    edit(uid : string) {
        this.editEvent.emit(uid);
    }

    triggerEditEvent(uid){
        //curious if this works rather than the very complicated alternative.
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
    }



    delete(uid : string) {
        if (confirm("are you sure you want to delete this console? (cannot be undone)"))
            this.deleteEvent.emit(uid);
    }

}
