import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges, OnChanges, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GameInfoService } from '../../../common/services/gameinfo.service';
import { GameDescriptor } from '../../../models/content/GameDescriptor';

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
    @Output() resetEvent = new EventEmitter<any>();




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
        if (this.editingMode) {
            this.checkStatus();
            this.oldValues = changes['editing'].currentValue;
            this.form.patchValue({title : this.oldValues.title, description : this.oldValues.description});
        }
        else {
            this.editingMode = false;
            this.resetForm();
            this.checkStatus();
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
        /* gets called when user clicks to clear the form
        does that, but also checks status- which dynamically adjusts
        the text in the submit button based on whether users are trying
        to submit new entry or update an existing one.
        
        Needs to get called rather often because the editingMode state needs
        to be closely monitored and controlled, failure to do so could result
        in serious errors.
        */
        this.editingMode = false;
        this.form.reset();
        this.checkStatus();
        this.resetEvent.emit();
    }

    addEntry() {
        const newEntry = {title : this.title, description : this.description }
        this.resetForm();
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

        // TODO: needs manually validation- dont allow
        // form submission if the title value is blank

        //NOTE: there is no form prompt (except red outline) if title is not provided.
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
