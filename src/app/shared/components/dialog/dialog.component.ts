import { Metadata } from './../../../models/content/metadata';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  buildInfo: {};
  initialState: {};
  returnValues : any;
  controls: any;
  form: FormGroup;
	
	existingMetadata : any;

  type: string;
  docUid: string;


  constructor(@Inject(MAT_DIALOG_DATA) data: any,
  private dialogRef : MatDialogRef<DialogComponent>,
  private fb : FormBuilder) {
    // this needs to persist if we are gonna edit documents
    if (data.updateObject) {
      this.existingMetadata = data.updateObject?.metadata;
    }

		// removes the plural from type-words where it makes sense
		// news is exception because its singular is the same as its plural.
		if (data.type) {
			this.type = ("news" ? data.type : data.type.slice(0,-1))
		}

		if (data.buildInfo) {
			this.buildInfo = Object.values(data.buildInfo);
		}

		if (data.initialState) {
			this.initialState = data.initialState;
		}
  }

  ngOnInit(): void { 
    this.form = this.fb.group(this.initialState);
  }
    
  save() {
		// const returnValue = {
			// metadata : 
			// uid: this.existingMetadata.uid, 
			// category: this.existingMetadata.category,
			// ...this.form.value 
		// }
    this.dialogRef.close(this.form.value)
  }

  reset() {
    this.form.reset();
  }
}