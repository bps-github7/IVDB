import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges, OnChanges, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GameInfoService } from '../common/services/gameinfo.service';
import { GameDescriptor } from '../models/content/GameDescriptor';

@Component({
  selector: 'descriptor-form',
  templateUrl: './descriptor-form.component.html',
  styleUrls: ['./descriptor-form.component.css']
})
export class DescriptorFormComponent implements OnInit, OnChanges {

    @Input() editing : string = "";
    oldValues: any = "";

    

    editingMode : boolean = false;
    submitMessage : string = this.editingMode ? "Submit changes" : "Add new entry"    
    
    
    
    // Need to check if the old doc exists before updating
    oldDoc : any;

    @Output() editDescriptorEvent = new EventEmitter<any>();
    @Output() addNewDescriptorEvent = new EventEmitter<any>();




    showSubForm : boolean = false;
    form : FormGroup;


    constructor(fb : FormBuilder, 
        private gameInfoService : GameInfoService) {
        
        

        // this.gameInfoService.getDocument$(this.oldValues.title)
        // .subscribe(p => this.oldDoc = p[0]);
        // if (this.oldDoc.title) this.editingMode = true;

        this.form = fb.group({
            title : ['', Validators.required],
            description : ['']
        })
    }

    ngOnChanges(changes: SimpleChanges): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        this.oldValues = changes['editing'].currentValue;
        this.form.patchValue({title : this.oldValues.title, description : this.oldValues.description});
        // Shitty way of knowing whether the user is providing update or entering new values.
        this.editingMode = true;
    }

    get title() { return this.form.get("title").value; }

    get description() { return this.form.get("description").value; }

    ngOnInit(): void {
    }

    resetForm() {
        this.form.reset();
        this.editingMode = false;
    }

    addEntry() {
        const newEntry = {title : this.title, description : this.description }
        this.addNewDescriptorEvent.emit(newEntry);
        this.resetForm();
    }

    updateEntry() {
        const newEntry = {uid : this.oldValues.uid, title : this.title, description : this.description }
        this.editDescriptorEvent.emit(newEntry);
        this.resetForm();
        this.editingMode = !this.editingMode;
    }

    submitForm() {
        /* Handles potential nuance(s) of submit button with
        two different functions, update or add new. 
         */

        // bad test but it will have to do for now
        if (this.editingMode) {
            // check if document exists first
                this.updateEntry();
        } else {
            this.addEntry();
        }
        

    }
 
    // submit() {
    //     const newDescriptor = {
    //         uid : '',
    //         type: '',
    //         title : this.form.title,
    //         description : this.form.description
    //     }
    //     this.editDescriptorEvent.emit(newDescriptor);
    // }

}
