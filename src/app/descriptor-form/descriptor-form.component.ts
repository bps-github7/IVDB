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

    // not sure best way to toggel this.
    addMode = true;


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

    submit() {
        const newDescriptor = {
            uid : '',
            type: '',
            title : this.form.title,
            description : this.form.description
        }
        this.editDescriptorEvent.emit(newDescriptor);
    }

}
