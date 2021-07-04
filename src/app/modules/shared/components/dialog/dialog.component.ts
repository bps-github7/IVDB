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
  // returnValues : any;
  // controls: any;
  form: FormGroup;
	
	// existingMetadata : any;

  // type: string;
  // docUid: string;


  constructor(@Inject(MAT_DIALOG_DATA) data: any,
  private dialogRef : MatDialogRef<DialogComponent>,
  private fb : FormBuilder) {
		if (data) {
			this.buildInfo = Object.values(data.buildInfo);
			this.initialState = data.form
		}
		// // this needs to persist if we are gonna edit documents
    // if (data.updateObject) {
		// 	this.docUid = data.updateObject.uid;
		// 	const old = data.updateObject;
		// 	this.initialState = {
		// 		title : [old.title],
		// 		description : [old.description],
		// 		body : [old.body],
		// 		tags : [old.tags]
		// 	}
		// 	// TODO: this probably blotches everything up!
		// 	this.existingMetadata = {
		// 		createdAt : data.updateObject.metadata.createdAt,
		// 		// creator : this.detectNewContributors(),
		// 		category : data.updateObject.metadata.category,
		// 		tags: data.updateObject.metadata.tags,
		// 	}
    // } 
		// // this is the case where we are creating- makes a new form
		// else {
			// this.initialState = data.buildInfo;

		// }
		// this.buildInfo = Object.values(data.buildInfo.build);
	}

  ngOnInit(): void { 
    this.form = this.fb.group(this.initialState);
  }
   
	
  save() {
		/* in the case where there is a new contributor to the article
			return the list of all contributors, and the form value, else
			only return the form value.
		*/
		this.dialogRef.close(this.form.value)
  }

  reset() {
    this.form.reset();
  }
}