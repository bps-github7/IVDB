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
    editingMode : boolean = false;
    oldValues: any = "";
    
    // Need to check if the old doc exists before updating
    oldDoc : any;

    @Output() editDescriptorEvent = new EventEmitter<any>();
    @Output() addNewDescriptorEvent = new EventEmitter<any>();


    showSubForm : boolean = false;
    form : FormGroup;


    constructor(fb : FormBuilder, 
        private gameInfoService : GameInfoService) {
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

    get title() { return this.form.get("title"); }

    get description() { return this.form.get("description"); }

    ngOnInit(): void {
    }

    resetForm() {
        this.form.reset();
        this.editingMode = false;
    }

    submitForm() {
        /* Handles potential nuance(s) of submit button with
        two different functions, update or add new. 
         */
        if (this.editingMode) {
            // check if document exists first
            this.gameInfoService.getDocument$(this.oldValues.title)
            .subscribe(p => {this.oldDoc = p});
            if (this.oldDoc.title) {
                const newDescriptor = {title : this.title, description : this.description }
                this.editDescriptorEvent.emit(newDescriptor)
            }
            else {
                // Can't really think of circumstance where this conditionn would execute but just in case.
                if (confirm("Note: No entry in game-info for this title. Do you want to create it? (currently you are trying to update an entry)")) {
                    const newDescriptor = {title : this.form.get('title'), description : this.form.get('description')}
                    this.addNewDescriptorEvent.emit(newDescriptor);
                } else {this.resetForm()}
            }
        } else {
            const newDescriptor = {title : this.form.get('title'), description : this.form.get('description')}
            this.addNewDescriptorEvent.emit(newDescriptor);
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
