import { Metadata } from './../../../../models/content/metadata.model';
// import { Metadata } from './../../../models/content/metadata';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.sass']
})
export class DialogComponent implements OnInit {
  buildInfo: {};
  initialState: {};
  form: FormGroup;

	oldValues : any;
	mode : string = "create";

  constructor(@Inject(MAT_DIALOG_DATA) data: any,
  private dialogRef : MatDialogRef<DialogComponent>,
  private fb : FormBuilder) {
		if (data) {
			this.buildInfo = Object.values(data.buildInfo);
			this.initialState = data.form
			if (data.updateObject) {
				this.oldValues = data.updateObject.body;
				this.mode = "edit";
				this.initialState = {
					title : [this.oldValues.title],
					description : [this.oldValues.description],
					body : [this.oldValues.body],
					tags : [this.oldValues.metadata.tags]
				}
				// console.log(this.oldValues)
			}
		}
	}

  ngOnInit(): void { 
		this.form = this.fb.group(this.initialState);
  }
   
	
  save() {
		/* in the case where there is a new contributor to the article
			return the list of all contributors, and the form value, else
			only return the form value.
		*/
		if (this.mode === "edit") {
			const returnValue = {
				id : this.oldValues.id,
				metadata : this.oldValues.metadata,
				...this.form.value
			}
			this.dialogRef.close(returnValue)
		}
		else {
			this.dialogRef.close(this.form.value)
		}
  }

  reset() {
    this.form.reset();
  }
}