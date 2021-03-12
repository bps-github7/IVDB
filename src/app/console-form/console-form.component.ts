import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GameInfoService } from '../common/services/gameinfo.service';

@Component({
  selector: 'console-form',
  templateUrl: './console-form.component.html',
  styleUrls: ['./console-form.component.css']
})
export class ConsoleFormComponent implements OnInit {

    generations : any [] = [
        {title: "1", description: "first generation", more: ""},
        {title : "2", description: "second generation", more: ""},
        {title: "3", description: "third generation", more: ""},
        {title: "4", description: "fourth generation", more: ""},
        {title: "5", description: "fifth generation", more: ""},
        {title: "6", description: "sixth generation", more: ""},
        {title: "7", description: "seventh generation", more: ""},
        {title: "8", description: "eighth generation", more: ""},
        {title: "9", description: "ninth generation", more: ""},
        {title: "10", description: "tenth generation", more: ""}];
    types : string [] = ["home", "portalable", "hybrid", "miscellaneous"];
    platforms : any [];
    showRest : boolean = false;
    form : FormGroup;


    constructor(fb : FormBuilder, private gameInfoServce : GameInfoService) {

        this.gameInfoServce.getType$('platform')
        .subscribe(p => this.platforms = p);

        this.form = fb.group({
            name : ['', Validators.required],
            qualifiedName : [''],
            generation : ['', Validators.required, Validators.min(1), Validators.max(10)],
            //validator : valid date if this exists
            released : [''],
            type : [''],
            maker : [''],
        })
    }

    test() {
        for (let i = 0; i < this.types.length; i++) {
            console.log(this.types[i]);
        }
    }

     get name() { return this.form.get('name').value; }

    get qualifiedName() { return this.form.get('qualifiedName').value; }

    get generation() { return this.form.get('generation').value; }

    get released() { return this.form.get('released').value; }

    get type() { return this.form.get('type').value; }

    get maker() { return this.form.get('maker').value; }


  ngOnInit(): void {
  }

}
