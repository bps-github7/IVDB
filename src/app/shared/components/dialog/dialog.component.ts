import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) data: any,
  private dialogRef : MatDialogRef<DialogComponent>,
  private fb : FormBuilder) { }

  // this is certainly not an ideal way to do this!
  buildInfo = {
    first : {
      type : "text",
      formControlName : "first",
      config : {
        placeholder : "enter your first name"
      }
    },
    last : {
      type : "text",
      formControlName : "last",
      config : {
        placeholder : "enter your last name"
      }
    },
    about : {
      type: 'textarea',
      formControlName : "about",
      config : {
        placeholder : "a short description"
      }  
    },
    nicknames : {
      type: 'multitext',
      formControlName : "nicknames",
      config : {
        placeholder : "the content of the article"
      }
    },
    breakfeast : {
      type: 'select',
      formControlName : "breakfeast",
      config : {
        placeholder : "choose your breakfeast weapons"
      }  
    },
    dogs : {
      type: 'multiple select',
      formControlName : "dogs",
      config : {
        placeholder : "which cute fluffs are the bestest bois"
      }
    },
    politics : {
      type: 'radio',
      formControlName : "politics",
      config : {
        placeholder : "which animal do you do"
      }  
    },
    ingredients : {
      type: 'checkbox',
      formControlName : "ingredients",
      config : {
        placeholder : "you put WHAT on your pizza?"
      }
    },

  }

  form: FormGroup;
  initialState = {
    first : [""],
    last : [""],
    about : [""],
    nicknames : this.fb.array([]),
    breakfeast : [""],
    dogs : [""],
    politics : [""],
    ingredients : this.fb.array([]),
  };

  ngOnInit(): void { this.form = this.fb.group(this.initialState) }
    
  save() {
    this.dialogRef.close();    
  }

  reset() {
    this.form.reset();
  }
}