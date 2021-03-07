import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GameDescriptor } from '../models/content/GameDescriptor';

@Component({
  selector: 'descriptor-form',
  templateUrl: './descriptor-form.component.html',
  styleUrls: ['./descriptor-form.component.css']
})
export class DescriptorFormComponent implements OnInit {

    //tricky lil thing here
    description = '';
    @Input() editingTitle : string = "";
    @Input() editingDescription : string = "";

    @Output() editDescriptorEvent = new EventEmitter<GameDescriptor>();


    showSubForm : boolean = false;
    form : any;


    constructor(fb : FormBuilder) {
        this.form = fb.group({
            title : [this.editingTitle, Validators.required],
            description : [this.editingDescription]
        })
    }

    ngOnInit(): void {
    }

    submit(newTitle, newDescription) {
        const newDescriptor = {
            uid : '',
            type: '',
            title : newTitle,
            description : newDescription
        }
        this.editDescriptorEvent.emit(newDescriptor);
    }

}
