import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-edit-stream',
  templateUrl: './edit-stream.component.html',
  styleUrls: ['./edit-stream.component.css']
})
export class EditStreamComponent implements OnInit {

    form : FormGroup;
    consoles : string [] = ["nintendo", "sony", "microsoft", "pc", "mobile", "classic"]
    initialState = {
      title: ['', Validators.required],
      creator: [ localStorage.getItem('username'), Validators.required],
      description: [''],
      body: ['', Validators.required],
      images: this.fb.array([]),
      links: this.fb.array([]),
      misc: this.fb.array([]),
      created : [''],
      category : [''],
      tags: this.fb.array([]),
    }
    docUid: string;


    constructor(
      @Inject(MAT_DIALOG_DATA) data: any,
      private dialogRef : MatDialogRef<EditStreamComponent>,
      private fb: FormBuilder,
      private firebaseService : FirebaseService,
  
      ) { 
        if (data) {
          this.docUid = data?.uid;
          this.initialState = {
            title: [data?.title, Validators.required],
            creator: [localStorage.getItem('username'), Validators.required],
            description: [data?.description],
          //  TODO: implement these later. have to be in the intial state for the form to work..
            body: [data?.body, Validators.required],
            images: this.fb.array([]),
            links: this.fb.array([]),
            misc: this.fb.array([]),
            created : [""],
            category : [""],
            tags: this.fb.array([]),
          }
        }
      }
  
    ngOnInit(): void { this.form = this.fb.group(this.initialState) }
  
    save() {
      const returnValue = { uid: this.docUid, ...this.form.value }
      this.dialogRef.close(returnValue);
    }
  
    reset() {
      this.form.reset()
    }
  
}
