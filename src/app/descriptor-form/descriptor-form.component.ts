import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges, OnChanges, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GameInfoService } from '../common/services/gameinfo.service';
import { GameDescriptor } from '../models/content/GameDescriptor';

@Component({
  selector: 'descriptor-form',
  templateUrl: './descriptor-form.component.html',
  styleUrls: ['./descriptor-form.component.css']
})
export class DescriptorFormComponent implements OnChanges {

    @Input() editing : string = "";
    @Input() editingMode : boolean = false;

    oldValues: any = "";
    submitMessage : string = "Add new";    
    
    
    
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
        console.log("On changes in descriptor form!");
        console.log(`editing mode : ${this.editingMode}`);
        if (this.editingMode) {
            this.checkStatus();
            this.oldValues = changes['editing'].currentValue;
            this.form.patchValue({title : this.oldValues.title, description : this.oldValues.description});
        }
    }

    get title() { return this.form.get("title").value; }

    get description() { return this.form.get("description").value; }

    checkStatus() {
        /* Wish we had a more precise means of toggeling the mode
        and   
        */
        this.submitMessage = this.editingMode ? "Submit changes" : "Add new entry";
    }

    resetForm() {
        this.form.reset();
        this.editingMode = !this.editingMode;
        this.checkStatus();
    }

    addEntry() {
        const newEntry = {title : this.title, description : this.description }
        this.form.reset();
        this.editingMode = false;
        this.addNewDescriptorEvent.emit(newEntry);
    }

    updateEntry() {
        const newEntry = {uid : this.oldValues.uid, title : this.title, description : this.description }
        this.resetForm();
        this.editDescriptorEvent.emit(newEntry);
        
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
