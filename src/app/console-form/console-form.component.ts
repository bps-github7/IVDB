import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { GameInfoService } from '../common/services/gameinfo.service';

@Component({
  selector: 'console-form',
  templateUrl: './console-form.component.html',
  styleUrls: ['./console-form.component.css']
})
export class ConsoleFormComponent implements OnInit {

    // generations : any = [1,2,3,4,5,6,7,8,9,10];
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
            nickname : ['', Validators.required],
            name : ['', Validators.required],
            qualifiedName : [''],
            maker : ['', Validators.required],
            generation : ['', Validators.required, Validators.min(1), Validators.max(10)],
            type : ['', Validators.required],

            //validator : valid date if this exists
            released : [''],
            image: [''],
            description: ['']
        })
    }

    test() {
        for (let i = 0; i < this.types.length; i++) {
            console.log(this.generations[i]);
        }
    }


    get nickname() { return this.form.get('nickname').value; }
    get name() { return this.form.get('name').value; }
    get qualifiedName() { return this.form.get('qualifiedName').value; }
    get maker() { return this.form.get('maker').value; }
    get generation() { return this.form.get('generation').value; }
    get type() { return this.form.get('type').value; }


    // Trying to prevent form getting submitted with bad values should user leave optional fields blank.
    get released() { 
        if (this.form.get('released').value != '')
            return this.form.get('released').value; 
        return null;
    }
    
    get image() {
        if (this.form.get('image').value != '')
            return this.form.get('image').value;
        return null;
        
    }
    
    get description() {
        if (this.form.get('description').value != '') 
            return this.form.get('description').value;
        return null;
    }

    // changeGen(e) {
    //     this.generation.setValue(e.target.value);
    // }

    save() {
        this.gameInfoServce.addConsole({
            nickname: this.nickname,
            name: this.name,
            qualifiedName: `${this.maker} ${this.name}`,
            maker: this.maker,
            generation : this.generation,
            type: this.type,

            // how will you handle default args?
            released: this.released,

        });
        this.reset();
        this.showRest = !this.showRest;
    }

    reset() {
        this.form.reset();

    }




  ngOnInit(): void {
  }

}
