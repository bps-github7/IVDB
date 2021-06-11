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
			this.docUid = data.updateObject.uid;
			const old = data.updateObject;
			this.initialState = {
				title : [old.title],
				description : [old.description],
				body : [old.body],
				tags : [old.tags]
			}
			// TODO: this probably blotches everything up!
			this.existingMetadata = {
				createdAt : data.updateObject.metadata.createdAt,
				creator : this.detectNewContributors(),
				category : data.updateObject.metadata.category,
				tags: data.updateObject.metadata.tags,
			}
    } 
		// this is the case where we are creating- makes a new form
		else {
			this.initialState = data.buildInfo.initialState;

		}
		this.buildInfo = Object.values(data.buildInfo.build);
	}

  ngOnInit(): void { 
    this.form = this.fb.group(this.initialState);
  }
   
	
	detectNewContributors() {
		// TODO: implement- this checks to see if the current contributor is same as the one who published the article
		// and appends them if not. careful of situations where there are more than 2!
	}
  save() {
		// const returnValue = {
		// 	this.existingMetadata,
		// 	...this.form.value
		// }
		console.log("dialog still is not returning a custom object!!!")
		this.dialogRef.close(this.form.value)
  }

  reset() {
    this.form.reset();
  }
}