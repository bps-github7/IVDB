import { Component, InjectionToken, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {

  form: FormGroup;
  categories: string [] = ['game','console','culture','misc'];
  initialState = {
        title: ['', Validators.required],
        creator: [localStorage.getItem('username'), Validators.required],
        description: [''],
        body: ['', Validators.required],
        titleCardImage: [''],
        images: this.fb.array([]),
        links: this.fb.array([]),
        misc: this.fb.array([]),
        created : [''],
        category : ['news'],
        tags: this.fb.array([]),
      };
  docUid : string;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private dialogRef : MatDialogRef<EditNewsComponent>,
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
          titleCardImage : [''],
          images: this.fb.array([]),
          links: this.fb.array([]),
          misc: this.fb.array([]),
          // dont need this form controls here since user wont ever edit them
          created : [''],
          category : ['news'],
          tags: this.fb.array([]),
        }
    }}

  ngOnInit(): void { this.form = this.fb.group(this.initialState) }

  save() {
    const returnValue = {uid : this.docUid, ...this.form.value}
    this.dialogRef.close(returnValue);    
    /* 
    you could also use this as an attribute instead of writing a method...
    [mat-dialog-close]='form.value' */
  }


  // just do this when you submit the dialog- problem is we need two seperate calls- 1. storage, 2. firestore
  upload($event) {
    const path = $event.target.files[0] 
    this.form.patchValue({titleCardImage : path})
    // console.log(path);
  }

  uploadImage() {

  }

  reset() {
    this.form.reset()
  }

}