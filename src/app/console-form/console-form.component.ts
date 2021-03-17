import { Component, Input, OnChanges, EventEmitter, SimpleChanges, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { GameInfoService } from '../common/services/gameinfo.service';

@Component({
  selector: 'console-form',
  templateUrl: './console-form.component.html',
  styleUrls: ['./console-form.component.css']
})
export class ConsoleFormComponent implements OnChanges {

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
    oldValues: any;

    @Input() editing;
    @Output() editConsoleEvent = new EventEmitter<any>();

    @Input() editingMode: boolean = false;
    submitMessage = "add new console";

    constructor(fb : FormBuilder, private gameInfoServce : GameInfoService) {

        this.gameInfoServce.getType$('platform')
        .subscribe(p => this.platforms = p);

        this.form = fb.group({
            nickname : ['', Validators.required],
            name : ['', Validators.required],
            qualifiedName : [''],
            maker : ['', Validators.required],
            generation : ['', Validators.required],
            type : ['', Validators.required],

            //validator : valid date if this exists
            released : [''],
            image: [''],
            description: ['']
        })
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.editingMode) {
            //TODO: ternary op at top instead of this, doing it manually. bad looks.
            this.submitMessage = 'edit console'
            this.oldValues = changes['editing'].currentValue    
            this.form.patchValue({
                nickname : this.oldValues.nickname,
                name: this.oldValues.name,
                qualifiedName : this.oldValues.qualifiedName,
                maker : this.oldValues.maker,
                generation : this.oldValues.generation,
                type : this.oldValues.type,
                released : this.oldValues.released,
                image : this.oldValues.image,
                description : this.oldValues.description});
            
            this.showRest = true;
        } 
        // not quite sure this is what you want to do here.
        else {
            this.editingMode = false;
            this.resetForm();
            this.checkStatus();
        }
        
    }

    get nickname() { return this.form.get('nickname').value; }
    get name() { return this.form.get('name').value; }
    get qualifiedName() { return this.form.get('qualifiedName').value; }
    get maker() { return this.form.get('maker').value; }
    get generation() { return this.form.get('generation').value; }
    get type() { return this.form.get('type').value; }
    // get released() { return this.form.get('released').value; }
    // get image() { return this.form.get('image').value; }
    // get description() { return this.form.get('description').value; }

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

    submitForm() {
        this.showRest = false;
        if (this.editingMode) {
            this.updateConsole()

        } else { 
            this.addNewConsole();
        }


    }

    updateConsole() {
        const newEntry = {
            uid : this.oldValues.uid,
            nickname : this.nickname,
            name : this.name,
            qualifiedName : `${this.maker.toLowerCase()} ${this.name.toLowerCase()}`,
            maker : this.maker,
            generation : this.generation,
            type : this.type,
            released : this.released,
            image : this.image,
            description : this.description 
        }
        this.resetForm();
        this.editConsoleEvent.emit(newEntry);
    }



    
    checkStatus() {
        this.submitMessage = this.editingMode ? "Submit Console" : "Add New Console";
    }

    resetForm() {
        this.editingMode = false;
        this.form.reset();
        this.checkStatus();
    }



    addNewConsole() {
        this.gameInfoServce.addConsole({
            nickname: this.nickname,
            name: this.name,
            qualifiedName: `${this.maker.toLowerCase()} ${this.name.toLowerCase()}`,
            maker: this.maker,
            generation : this.generation,
            type: this.type,
            released: this.released,
            image : this.image,
            description: this.description,


        });
        this.resetForm();
    }

    reset() {
        this.form.reset();
    }
}
