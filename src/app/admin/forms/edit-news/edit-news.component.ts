import { ThrowStmt } from '@angular/compiler';
import { Component, InjectionToken, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { database } from 'firebase';
import { Content } from 'src/app/models/content/content';
import { FirebaseService } from 'src/app/services/firebase.service';
import { NewsService } from 'src/app/services/news.service';

// how we define our own Injection Token
// export const DIALOG_DATA = new InjectionToken('DIALOG_DATA');
// then in admin.module providers : { provide: DIALOG_DATA, useValue : {} }


@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {

  form: FormGroup;
  categories: string [] = ["game","console","culture","misc"];
  initialState = {
        title: ['', Validators.required],
        creator: [localStorage.getItem('username'), Validators.required],
        description: [''],
        body: ['', Validators.required],
        images: this.fb.array([]),
        links: this.fb.array([]),
        misc: this.fb.array([]),
        created : [''],
        category : [''],
        tags: this.fb.array([]),
      };
  
  editingMode: boolean = false;
  docUid : string;

  constructor(

    // what happened to the config data!????
    @Inject(MAT_DIALOG_DATA) data: any,
    private dialogRef : MatDialogRef<EditNewsComponent>,
    private fb: FormBuilder,
    private firebaseService : FirebaseService,
    ) {
      if (data) {
        this.editingMode = data?.uid ? true : false;
        this.docUid = data?.uid;
        this.initialState = {
          title: [data?.title, Validators.required],
          creator: [localStorage.getItem('username'), Validators.required],
          description: [data?.description],
        //  TODO: implement these later. have to be in the intial state for the form to work..
          body: ["", Validators.required],
          images: this.fb.array([]),
          links: this.fb.array([]),
          misc: this.fb.array([]),
          created : [""],
          category : [""],
          tags: this.fb.array([]),
        }
      //   };
        // }
      // console.log(data)
      // this. = data.data;
    }}

  ngOnInit(): void {

    // console.log(this..title)
    // 
    // // old approach: 
    // console.log(this.)
  this.form = this.fb.group(this.initialState)
  }

  save() {
    const returnValue = {action : this.editingMode, uid : this.docUid, ...this.form.value}
  
    
    this.dialogRef.close(returnValue);
    
    /* 
    you could also use this as an attribute instead of writing a method...
    [mat-dialog-close]="form.value" */
  }

  reset() {

    // TODO: need to figure out why this doesnt work
    this.form.reset()
  }

}
